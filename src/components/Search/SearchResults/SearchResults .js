import React, { useState } from "react";
import moment from "moment";
/* import FakeBookings from "../../../data/fakeBookings.json"; */
import CustomerProfile from "./../../CustomerProfile/CustomerProfile";

import "./search.css";

const SearchResults = props => {
  /* const [bookings, setBookings] = useState(FakeBookings); */

  const [selected, setSelected] = useState(-1);
  const [id, setId] = useState("");

  const changeColorOnClick = i => {
    /* console.log("selected"); */
    setSelected(i);
  };

  const buttonDisplayCustomer = id => {
    setId(id);
    console.log(id);
  };

  const getFakeBookings = () => {
    return props.results.map((booking, i) => {
      const checkIn = moment(booking.checkInDate);
      const checkOut = moment(booking.checkOutDate);

      const checkInFormated = checkIn.format("DD-MM-YYYY");
      const checkOutFormated = checkOut.format("DD-MM-YYYY");

      return (
        <tr
          key={i}
          onClick={() => changeColorOnClick(i)}
          className={selected === i ? "selected" : ""}
        >
          <th scope="row">{booking.id}</th>
          <td>{booking.title}</td>
          <td>{booking.firstName}</td>
          <td>{booking.surname}</td>
          <td>{booking.email}</td>
          <td>{booking.roomId}</td>
          <td>{checkInFormated}</td>
          <td>{checkOutFormated}</td>
          <td>{checkOut.diff(checkIn, "days")}</td>
          <td>
            <button onClick={() => buttonDisplayCustomer(booking.id)}>
              Show profile
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out date</th>
            <th scope="col">Total nights</th>
          </tr>
        </thead>
        <tbody>{props.results.length ? getFakeBookings() : ""}</tbody>
      </table>
      <CustomerProfile id={id} />
    </>
  );
};

export default SearchResults;
