import * as React from "react";
import { RotatingLines } from "react-loader-spinner";

const fetchData = async (coords, page = 0, sort = "asc") => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&hourly=temperature_2m,wind_speed_10m`
  );
  const json = await response.json();

  console.log("JSON HOURLY ", json.hourly);

  return {
    forecasts: json.hourly
      ? json.hourly.time.map((time, index) => ({
          time,
          temp: json.hourly.temperature_2m[index],
          wind: json.hourly.wind_speed_10m[index],
        }))
      : [],
    totalCount: json.hourly?.time.length || 0,
  };
};

/**
 *
 * { lat: 51.5074, lon: -0.1278 }
 *
 * Function to get the latitude and longitude for the city entered by the user using the Geocoding API.
 * https://geocoding-api.open-meteo.com/v1/search?name=London&count=1
 */

// input - string - location
// return - object { lat: 51.5074, lon: -0.1278 }
// async....await

// the API we are calling could return 404 but fetch throws an error instead!
const fetchCoordinates = async (location) => {
  try {
    const result = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1`
    );

    if (result.ok) {
      const json = await result.json();
      if (json.results) {
        const { latitude, longitude } = json.results[0];
        return {
          lat: latitude,
          lon: longitude,
        };
      } else {
        throw new Error(`No results for ${location}`);
      }
    } else {
      console.log("is not a 2xx code - need to handle");
    }
  } catch (e) {
    console.log("CAUGHT! ", e.message);
  }
};

export default function WeatherForecast() {
  const [query, setQuery] = React.useState(""); // initalise to string (empty) to make it a fully controlled component
  const [forecasts, setForecasts] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [sort, setSort] = React.useState("asc");
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [coords, setCoords] = React.useState(null);

  const ITEMS_PER_PAGE = 8;

  /**
   *
   *
   *
   *
   * init a repo and Add to github mmmm yeah and deploy to somewhere?
   *
   * put state inside useReducer after github
   *
   *
   */
  const getPageOfResults = () => {
    const start = page * ITEMS_PER_PAGE;
    const finish = start + ITEMS_PER_PAGE;
    return forecasts.slice(start, finish);
  };

  const isLastPage = () => {
    return page + 1 === totalCount / ITEMS_PER_PAGE;
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(0);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    setPage(0);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  // get coordinates from users's location search
  React.useEffect(() => {
    if (!query) {
      setLoading(false);
      setCoords(null);
      return;
    }

    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(async () => {
      try {
        const result = await fetchCoordinates(query);
        if (!signal.aborted) {
          setLoading(false);
          setCoords(result ?? null); // If search fails, explicitly reset the coords to null
        }
      } catch (e) {
        if (e.name !== "AbortError") {
          console.error("Error fetching coordinates:", e);
        }
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [query]);

  // use them to get the weather
  React.useEffect(() => {
    if (!coords) {
      setLoading(false);
      setForecasts([]);
      setTotalCount(0);
      return;
    }
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;

    const handleFetchWeather = async () => {
      try {
        const { forecasts, totalCount } = await fetchData(coords);
        if (!signal.aborted) {
          setLoading(false);
          setForecasts(forecasts);
          setTotalCount(totalCount);
        }
      } catch (e) {
        if (e.name !== "AbortError") {
          console.error("Error fetching weather data:", e);
        }
      }
    };

    handleFetchWeather();
  }, [coords]);

  return (
    <main>
      <h1>Weather Forecast Search</h1>

      {coords === null ? (
        <h2>Coords: null</h2>
      ) : (
        <h2>Coords: {JSON.stringify(coords)}</h2>
      )}

      {/* Location search  */}
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="query">Location</label>
          <input
            type="text"
            id="query"
            name="query"
            value={query}
            onChange={handleSearch}
            placeholder="Enter a city..."
          />
        </div>
      </form>
      <section>
        <header>
          <h2>
            <span>
              {forecasts.length === 0
                ? "No Forecasts"
                : `Page ${page} of [TOTALPAGES @todo]`}
            </span>
            {/* Loading Spinner  */}
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={loading}
            />
          </h2>
        </header>

        {forecasts.length > 0 && (
          <>
            {/* Results sorting  */}
            <div>
              <label htmlFor="sort">Sort</label>
              <select id="sort" name="sort" onChange={handleSort} value={sort}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            {/* Results pagination buttons  */}
            <div>
              <button
                className="link"
                onClick={handlePrevPage}
                disabled={page === 0}
              >
                Previous
              </button>
              <button
                className="link"
                onClick={handleNextPage}
                disabled={isLastPage()}
              >
                Next
              </button>
            </div>

            {/* Results */}
            <ul>
              {getPageOfResults().map(({ time, temp, wind }, index) => (
                <li key={time}>
                  <span>{index} . </span>
                  <span>Time: {time} </span>
                  <span>Temp: {temp}&deg;C </span>
                  <span>Wind speed: {wind}m/s </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </main>
  );
}
