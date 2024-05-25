import React, { Component, useState } from "react";
import "./eventtable.css";
import EventDetails from "./eventdetails";

const Eventtable = ({ pass }) => {
  const r_data = pass._embedded;
  console.log("check2", r_data);
  const [eventData, s_setData] = useState(null);

  const function1 = (id) => {
    fetch(`http://localhost:9000/getEventDetails?id=${id}`)
      .then((response) => response.json())
      .then((response_data) => {
        s_setData(response_data);
        // Handle the response data
        console.log(response_data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  return (
    <div>
      <table className="myTable col-10 col-lg-10">
        <thead className="header_row" id="header_row">
          <th className="col-2">Date/Time</th>
          <th className="col-1.5">Icon</th>
          <th className="col-4">Event</th>
          <th className="col-1.5">Genre</th>
          <th className="col-3">Venue</th>
        </thead>

        {r_data.events.map((event) => (
          <tr onClick={() => function1(event.id)}>
            <td>{event.dates.start.localDate}</td>
            <td>{event.id}</td>
            <td>{event.name}</td>
            <td>{event.classifications[0].segment.name}</td>
            <td>{event._embedded.venues[0].name}</td>
          </tr>
        ))}
      </table>

      {eventData && <EventDetails eventData={eventData} />}
    </div>
  );
};

export default Eventtable;
