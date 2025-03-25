import * as React from "react";
import { RotatingLines } from "react-loader-spinner";

const fetchData = async ({ query = "", page = 0, tag = "" }) => {
  return fetch(
    `https://hn.algolia.com/api/v1/search?query=${query}&tags=${encodeURIComponent(
      tag
    )}&page=${page}`
  )
    .then((response) => response.json())
    .then((json) => ({
      results: json.hits || [],
      pages: json.nbPages || 0,
      resultsPerPage: json.hitsPerPage || 20,
    }));
};

/**
 *
 * Compare and learn
 * Ask ChatGPT to set me some similar challenges where I have to work out
 * the logic myself e.g. calculating position and the next/prev buttons
 */

export default function MyHackerNewsSearch() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [tag, setTag] = React.useState("story");
  const [page, setPage] = React.useState(0);
  const [resultsPerPage, setResultsPerPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(50);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    let ignore = false;

    const getData = async () => {
      // setLoading and reset results here
      setLoading(true);
      setResults([]);

      const { results, pages, resultsPerPage } = await fetchData({
        query,
        tag,
        page,
      });

      if (ignore === true) return;

      setResults(results);
      setTotalPages(pages);
      setResultsPerPage(resultsPerPage);
      setLoading(false);
    };

    getData();
    return () => {
      ignore = true;
    };
  }, [query, tag, page]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setPage(0);
  };

  const handleTag = (e) => {
    setTag(e.target.value);
    setPage(0);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <main>
      <h1>Hacker News Search</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="query">Search</label>
          <input
            type="text"
            id="query"
            name="query"
            value={query}
            onChange={handleSearch}
            placeholder="Search Hacker News..."
          />
        </div>
        <div>
          <label htmlFor="tag">Tag</label>
          <select id="tag" name="tag" onChange={handleTag} value={tag}>
            <option value="story">Story</option>
            <option value="ask_hn">Ask HN</option>
            <option value="show_hn">Show HN</option>
            <option value="poll">Poll</option>
          </select>
        </div>
      </form>
      <section>
        <header>
          <h2>
            {results.length === 0 ? (
              <span>No Results</span>
            ) : (
              <span>
                Page {page + 1} of {totalPages}
              </span>
            )}

            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={loading}
            />
          </h2>
          <div>
            <button
              className="link"
              onClick={handlePrevPage}
              disabled={page <= 0}
            >
              Previous
            </button>
            <button
              className="link"
              onClick={handleNextPage}
              disabled={page + 1 >= totalPages}
            >
              Next
            </button>
          </div>
        </header>
        <ol>
          {results.map(({ url, objectID, title }, index) => {
            const href =
              url || `https://news.ycombinator.com/item?id=${objectID}`;

            const position = resultsPerPage * page + index + 1;

            return (
              <li key={index}>
                <span>{position}.</span>
                <a href={href} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}
