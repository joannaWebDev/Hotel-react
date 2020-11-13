import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import SearchResults from "../Search/SearchResults/SearchResults ";
/* import FakeBookings from "../../data/fakeBookings.json"; */

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(error);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://cyf-react.glitch.me/error").then(
        res => {
          if (res.status == 500) {
            setError(true);
            return res.json();
          }
          return res.json();
        }
      );
      return response;
    };
    setLoading(true);
    fetchData().then(data => {
      setBookings(data);
      setLoading(false);
    });
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
        {error ? <p>error</p> : ""}
        {loading ? <p>loading</p> : <SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
