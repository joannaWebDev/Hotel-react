import React from "react";

import TouristInfoCards from "./components/TouristInfoCards/TouristInfoCards";
import Bookings from "./components/Bookings/Bookings";
import Heading from "./components/Heading/Heading";
import Footer from "./components/Footer/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
