import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import SearchResults from "../Search/SearchResults/SearchResults ";
/* import FakeBookings from "../../data/fakeBookings.json"; */

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://cyf-react.glitch.me").then(res =>
        res.json()
      );
      return response;
    };
    fetchData().then(data => setBookings(data));
  }, []);

  const filterBookings = searchVal => {
    const dataBooking = bookings.filter(
      booking =>
        booking.firstName.toLowerCase() == searchVal.toLowerCase() ||
        booking.surname.toLowerCase() == searchVal.toLowerCase()
    );
    setBookings(dataBooking);
  };

  const search = (event, searchVal) => {
    /* console.info(searchVal); */
    filterBookings(searchVal);
    event.preventDefault();
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
