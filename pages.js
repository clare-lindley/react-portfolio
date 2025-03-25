const getPageOfResults = (page) => {
  const forecasts = [
    {
      time: "2025-03-19T00:00",
      temp: 2.2,
      wind: 2.7,
    },
    {
      time: "2025-03-19T01:00",
      temp: 2,
      wind: 1.6,
    },
    {
      time: "2025-03-19T02:00",
      temp: 1.7,
      wind: 1.6,
    },
    {
      time: "2025-03-19T03:00",
      temp: 1.1,
      wind: 2.7,
    },
    {
      time: "2025-03-19T04:00",
      temp: 0.1,
      wind: 0.8,
    },
    {
      time: "2025-03-19T05:00",
      temp: -0.4,
      wind: 1.5,
    },
    {
      time: "2025-03-19T06:00",
      temp: -1,
      wind: 1.5,
    },
    {
      time: "2025-03-19T07:00",
      temp: -0.8,
      wind: 1.3,
    },
    {
      time: "2025-03-19T08:00",
      temp: -0.3,
      wind: 1.3,
    },
    {
      time: "2025-03-19T09:00",
      temp: 1.7,
      wind: 0.7,
    },
    {
      time: "2025-03-19T10:00",
      temp: 4.2,
      wind: 0,
    },
    {
      time: "2025-03-19T11:00",
      temp: 6.4,
      wind: 2.1,
    },
    {
      time: "2025-03-19T12:00",
      temp: 8.2,
      wind: 4.9,
    },
    {
      time: "2025-03-19T13:00",
      temp: 9.7,
      wind: 6.7,
    },
    {
      time: "2025-03-19T14:00",
      temp: 10.6,
      wind: 7.1,
    },
    {
      time: "2025-03-19T15:00",
      temp: 11.2,
      wind: 6.3,
    },
    {
      time: "2025-03-19T16:00",
      temp: 11.4,
      wind: 5.8,
    },
    {
      time: "2025-03-19T17:00",
      temp: 11.3,
      wind: 5.7,
    },
    {
      time: "2025-03-19T18:00",
      temp: 10.8,
      wind: 4.6,
    },
    {
      time: "2025-03-19T19:00",
      temp: 10.1,
      wind: 2.5,
    },
    {
      time: "2025-03-19T20:00",
      temp: 9.2,
      wind: 1.4,
    },
    {
      time: "2025-03-19T21:00",
      temp: 8.2,
      wind: 1.1,
    },
    {
      time: "2025-03-19T22:00",
      temp: 6.3,
      wind: 3.3,
    },
    {
      time: "2025-03-19T23:00",
      temp: 5.2,
      wind: 3.2,
    },
    {
      time: "2025-03-20T00:00",
      temp: 4.5,
      wind: 3.1,
    },
    {
      time: "2025-03-20T01:00",
      temp: 3.9,
      wind: 3.2,
    },
    {
      time: "2025-03-20T02:00",
      temp: 3.4,
      wind: 3.2,
    },
    {
      time: "2025-03-20T03:00",
      temp: 2.9,
      wind: 2.9,
    },
    {
      time: "2025-03-20T04:00",
      temp: 2.5,
      wind: 2.7,
    },
    {
      time: "2025-03-20T05:00",
      temp: 2.1,
      wind: 2.4,
    },
    {
      time: "2025-03-20T06:00",
      temp: 1.9,
      wind: 2.6,
    },
    {
      time: "2025-03-20T07:00",
      temp: 1.7,
      wind: 2.1,
    },
    {
      time: "2025-03-20T08:00",
      temp: 3.1,
      wind: 0.4,
    },
    {
      time: "2025-03-20T09:00",
      temp: 5.3,
      wind: 0.8,
    },
    {
      time: "2025-03-20T10:00",
      temp: 7.7,
      wind: 1.5,
    },
    {
      time: "2025-03-20T11:00",
      temp: 9.8,
      wind: 4.1,
    },
    {
      time: "2025-03-20T12:00",
      temp: 11.5,
      wind: 6.1,
    },
    {
      time: "2025-03-20T13:00",
      temp: 13.2,
      wind: 7.3,
    },
    {
      time: "2025-03-20T14:00",
      temp: 14.3,
      wind: 8.8,
    },
    {
      time: "2025-03-20T15:00",
      temp: 15,
      wind: 9.3,
    },
    {
      time: "2025-03-20T16:00",
      temp: 15.1,
      wind: 9.7,
    },
    {
      time: "2025-03-20T17:00",
      temp: 15.1,
      wind: 10.4,
    },
    {
      time: "2025-03-20T18:00",
      temp: 14.5,
      wind: 8.1,
    },
    {
      time: "2025-03-20T19:00",
      temp: 12.4,
      wind: 9.7,
    },
    {
      time: "2025-03-20T20:00",
      temp: 10.9,
      wind: 8.3,
    },
    {
      time: "2025-03-20T21:00",
      temp: 10,
      wind: 6.4,
    },
    {
      time: "2025-03-20T22:00",
      temp: 9.2,
      wind: 5,
    },
    {
      time: "2025-03-20T23:00",
      temp: 8.5,
      wind: 4.3,
    },
    {
      time: "2025-03-21T00:00",
      temp: 8,
      wind: 4,
    },
    {
      time: "2025-03-21T01:00",
      temp: 7.7,
      wind: 4.3,
    },
    {
      time: "2025-03-21T02:00",
      temp: 7.4,
      wind: 5.1,
    },
    {
      time: "2025-03-21T03:00",
      temp: 7.2,
      wind: 4.3,
    },
    {
      time: "2025-03-21T04:00",
      temp: 7,
      wind: 4.3,
    },
    {
      time: "2025-03-21T05:00",
      temp: 6.6,
      wind: 4.7,
    },
    {
      time: "2025-03-21T06:00",
      temp: 6.6,
      wind: 5.4,
    },
    {
      time: "2025-03-21T07:00",
      temp: 6.5,
      wind: 6.1,
    },
    {
      time: "2025-03-21T08:00",
      temp: 7.3,
      wind: 7.2,
    },
    {
      time: "2025-03-21T09:00",
      temp: 8.7,
      wind: 8,
    },
    {
      time: "2025-03-21T10:00",
      temp: 10.1,
      wind: 9.7,
    },
    {
      time: "2025-03-21T11:00",
      temp: 12.5,
      wind: 13,
    },
    {
      time: "2025-03-21T12:00",
      temp: 14.6,
      wind: 16.1,
    },
    {
      time: "2025-03-21T13:00",
      temp: 15.6,
      wind: 19.4,
    },
    {
      time: "2025-03-21T14:00",
      temp: 15.7,
      wind: 21.6,
    },
    {
      time: "2025-03-21T15:00",
      temp: 15.1,
      wind: 21.1,
    },
    {
      time: "2025-03-21T16:00",
      temp: 14.1,
      wind: 18.3,
    },
    {
      time: "2025-03-21T17:00",
      temp: 13.2,
      wind: 17.3,
    },
    {
      time: "2025-03-21T18:00",
      temp: 11.5,
      wind: 15.9,
    },
    {
      time: "2025-03-21T19:00",
      temp: 10.4,
      wind: 14.5,
    },
    {
      time: "2025-03-21T20:00",
      temp: 9.4,
      wind: 11.9,
    },
    {
      time: "2025-03-21T21:00",
      temp: 8.9,
      wind: 7.6,
    },
    {
      time: "2025-03-21T22:00",
      temp: 8.5,
      wind: 5.2,
    },
    {
      time: "2025-03-21T23:00",
      temp: 8.2,
      wind: 4.6,
    },
    {
      time: "2025-03-22T00:00",
      temp: 8.1,
      wind: 3.7,
    },
    {
      time: "2025-03-22T01:00",
      temp: 7.9,
      wind: 3.5,
    },
    {
      time: "2025-03-22T02:00",
      temp: 8.1,
      wind: 3.7,
    },
    {
      time: "2025-03-22T03:00",
      temp: 8.1,
      wind: 3.1,
    },
    {
      time: "2025-03-22T04:00",
      temp: 8.2,
      wind: 4.4,
    },
    {
      time: "2025-03-22T05:00",
      temp: 8.3,
      wind: 5.1,
    },
    {
      time: "2025-03-22T06:00",
      temp: 8.5,
      wind: 4.1,
    },
    {
      time: "2025-03-22T07:00",
      temp: 8.7,
      wind: 3.9,
    },
    {
      time: "2025-03-22T08:00",
      temp: 9.3,
      wind: 3.7,
    },
    {
      time: "2025-03-22T09:00",
      temp: 10,
      wind: 5.3,
    },
    {
      time: "2025-03-22T10:00",
      temp: 11.4,
      wind: 8.4,
    },
    {
      time: "2025-03-22T11:00",
      temp: 11.5,
      wind: 8.1,
    },
    {
      time: "2025-03-22T12:00",
      temp: 11.5,
      wind: 9.5,
    },
    {
      time: "2025-03-22T13:00",
      temp: 11.7,
      wind: 10,
    },
    {
      time: "2025-03-22T14:00",
      temp: 11.9,
      wind: 10.1,
    },
    {
      time: "2025-03-22T15:00",
      temp: 12,
      wind: 9.4,
    },
    {
      time: "2025-03-22T16:00",
      temp: 12,
      wind: 7.3,
    },
    {
      time: "2025-03-22T17:00",
      temp: 11.9,
      wind: 5.9,
    },
    {
      time: "2025-03-22T18:00",
      temp: 11.6,
      wind: 5.6,
    },
    {
      time: "2025-03-22T19:00",
      temp: 11,
      wind: 5.8,
    },
    {
      time: "2025-03-22T20:00",
      temp: 10.2,
      wind: 5.8,
    },
    {
      time: "2025-03-22T21:00",
      temp: 9.6,
      wind: 5.7,
    },
    {
      time: "2025-03-22T22:00",
      temp: 9.2,
      wind: 5.6,
    },
    {
      time: "2025-03-22T23:00",
      temp: 8.9,
      wind: 5.4,
    },
    {
      time: "2025-03-23T00:00",
      temp: 8.8,
      wind: 5.3,
    },
    {
      time: "2025-03-23T01:00",
      temp: 8.7,
      wind: 5.6,
    },
    {
      time: "2025-03-23T02:00",
      temp: 8.7,
      wind: 5.8,
    },
    {
      time: "2025-03-23T03:00",
      temp: 8.7,
      wind: 6.5,
    },
    {
      time: "2025-03-23T04:00",
      temp: 8.6,
      wind: 6.8,
    },
    {
      time: "2025-03-23T05:00",
      temp: 8.6,
      wind: 6.9,
    },
    {
      time: "2025-03-23T06:00",
      temp: 8.8,
      wind: 8,
    },
    {
      time: "2025-03-23T07:00",
      temp: 9.1,
      wind: 10.8,
    },
    {
      time: "2025-03-23T08:00",
      temp: 9.7,
      wind: 14.2,
    },
    {
      time: "2025-03-23T09:00",
      temp: 10.3,
      wind: 17.1,
    },
    {
      time: "2025-03-23T10:00",
      temp: 11.1,
      wind: 17.9,
    },
    {
      time: "2025-03-23T11:00",
      temp: 12,
      wind: 18.1,
    },
    {
      time: "2025-03-23T12:00",
      temp: 12.6,
      wind: 18,
    },
    {
      time: "2025-03-23T13:00",
      temp: 12.7,
      wind: 18.1,
    },
    {
      time: "2025-03-23T14:00",
      temp: 12.6,
      wind: 17.8,
    },
    {
      time: "2025-03-23T15:00",
      temp: 12.1,
      wind: 17.7,
    },
    {
      time: "2025-03-23T16:00",
      temp: 11.2,
      wind: 17.5,
    },
    {
      time: "2025-03-23T17:00",
      temp: 10,
      wind: 17.4,
    },
    {
      time: "2025-03-23T18:00",
      temp: 8.9,
      wind: 17.3,
    },
    {
      time: "2025-03-23T19:00",
      temp: 8.1,
      wind: 16.9,
    },
    {
      time: "2025-03-23T20:00",
      temp: 7.5,
      wind: 16.4,
    },
    {
      time: "2025-03-23T21:00",
      temp: 7.1,
      wind: 15.8,
    },
    {
      time: "2025-03-23T22:00",
      temp: 6.8,
      wind: 15.4,
    },
    {
      time: "2025-03-23T23:00",
      temp: 6.7,
      wind: 14.6,
    },
    {
      time: "2025-03-24T00:00",
      temp: 6.6,
      wind: 14.1,
    },
    {
      time: "2025-03-24T01:00",
      temp: 6.6,
      wind: 13.8,
    },
    {
      time: "2025-03-24T02:00",
      temp: 6.5,
      wind: 13.5,
    },
    {
      time: "2025-03-24T03:00",
      temp: 6.5,
      wind: 13.5,
    },
    {
      time: "2025-03-24T04:00",
      temp: 6.5,
      wind: 13.8,
    },
    {
      time: "2025-03-24T05:00",
      temp: 6.6,
      wind: 14.4,
    },
    {
      time: "2025-03-24T06:00",
      temp: 6.6,
      wind: 14.8,
    },
    {
      time: "2025-03-24T07:00",
      temp: 3.3,
      wind: 2.5,
    },
    {
      time: "2025-03-24T08:00",
      temp: 5,
      wind: 1.8,
    },
    {
      time: "2025-03-24T09:00",
      temp: 6.8,
      wind: 1.6,
    },
    {
      time: "2025-03-24T10:00",
      temp: 8.5,
      wind: 3.4,
    },
    {
      time: "2025-03-24T11:00",
      temp: 10.3,
      wind: 6.4,
    },
    {
      time: "2025-03-24T12:00",
      temp: 11.6,
      wind: 8.5,
    },
    {
      time: "2025-03-24T13:00",
      temp: 12.3,
      wind: 9,
    },
    {
      time: "2025-03-24T14:00",
      temp: 12.7,
      wind: 9,
    },
    {
      time: "2025-03-24T15:00",
      temp: 12.6,
      wind: 9.5,
    },
    {
      time: "2025-03-24T16:00",
      temp: 12.1,
      wind: 10.8,
    },
    {
      time: "2025-03-24T17:00",
      temp: 11.1,
      wind: 12.3,
    },
    {
      time: "2025-03-24T18:00",
      temp: 10.2,
      wind: 13,
    },
    {
      time: "2025-03-24T19:00",
      temp: 9.3,
      wind: 12.2,
    },
    {
      time: "2025-03-24T20:00",
      temp: 8.5,
      wind: 10.8,
    },
    {
      time: "2025-03-24T21:00",
      temp: 7.8,
      wind: 9.4,
    },
    {
      time: "2025-03-24T22:00",
      temp: 7.5,
      wind: 7.9,
    },
    {
      time: "2025-03-24T23:00",
      temp: 7.5,
      wind: 6.5,
    },
    {
      time: "2025-03-25T00:00",
      temp: 7.4,
      wind: 5.8,
    },
    {
      time: "2025-03-25T01:00",
      temp: 7.2,
      wind: 5.8,
    },
    {
      time: "2025-03-25T02:00",
      temp: 7,
      wind: 6.2,
    },
    {
      time: "2025-03-25T03:00",
      temp: 6.8,
      wind: 6.6,
    },
    {
      time: "2025-03-25T04:00",
      temp: 6.7,
      wind: 6.3,
    },
    {
      time: "2025-03-25T05:00",
      temp: 6.6,
      wind: 5.7,
    },
    {
      time: "2025-03-25T06:00",
      temp: 6.7,
      wind: 5.8,
    },
    {
      time: "2025-03-25T07:00",
      temp: 7.2,
      wind: 7,
    },
    {
      time: "2025-03-25T08:00",
      temp: 8,
      wind: 8.4,
    },
    {
      time: "2025-03-25T09:00",
      temp: 8.7,
      wind: 9.6,
    },
    {
      time: "2025-03-25T10:00",
      temp: 9.3,
      wind: 10.2,
    },
    {
      time: "2025-03-25T11:00",
      temp: 9.8,
      wind: 10.7,
    },
    {
      time: "2025-03-25T12:00",
      temp: 10.1,
      wind: 10.4,
    },
    {
      time: "2025-03-25T13:00",
      temp: 10,
      wind: 9.8,
    },
    {
      time: "2025-03-25T14:00",
      temp: 9.7,
      wind: 8.9,
    },
    {
      time: "2025-03-25T15:00",
      temp: 9.4,
      wind: 7.9,
    },
    {
      time: "2025-03-25T16:00",
      temp: 9.2,
      wind: 6.9,
    },
    {
      time: "2025-03-25T17:00",
      temp: 8.9,
      wind: 6,
    },
    {
      time: "2025-03-25T18:00",
      temp: 8.7,
      wind: 5.2,
    },
    {
      time: "2025-03-25T19:00",
      temp: 8.6,
      wind: 4.5,
    },
    {
      time: "2025-03-25T20:00",
      temp: 8.6,
      wind: 3.1,
    },
    {
      time: "2025-03-25T21:00",
      temp: 8.5,
      wind: 2.3,
    },
    {
      time: "2025-03-25T22:00",
      temp: 8.5,
      wind: 2.3,
    },
    {
      time: "2025-03-25T23:00",
      temp: 8.6,
      wind: 3.3,
    },
  ];

  const start = page * 8;
  const finish = start + 7;

  console.log(start);
  console.log(finish);
  console.log("++++++++++");

  return forecasts.slice(start, finish);
};

getPageOfResults(0);
getPageOfResults(1);
getPageOfResults(2);
getPageOfResults(3);
