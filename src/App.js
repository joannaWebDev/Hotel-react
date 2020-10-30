import React from "react";

import TouristInfoCards from "./components/TouristInfoCards/TouristInfoCards";
import Bookings from "./components/Bookings/Bookings";
import Heading from "./components/Heading/Heading";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  const footer = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer footer={footer} />
    </div>
  );
};

export default App;
