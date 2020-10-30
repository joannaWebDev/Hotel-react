import React from "react";
import styles from "./searchResults.css";

const SearchResults = ({ results }) => {
  var moment = require("moment"); // require
  moment().format();

  const tdMap = () => {
    return results.map(result => {
      return (
        <tr>
          <td key={result.id}>{result.id}</td>
          <td key={result.title}>{result.title}</td>
          <td key={result.firstName}>{result.firstName}</td>
          <td key={result.surname}>{result.surname}</td>
          <td key={result.email}>{result.email}</td>
          <td key={result.roomId}>{result.roomId}</td>
          <td key={result.checkInDate}>{result.checkInDate}</td>
          <td key={result.checkOutDate}>{result.checkOutDate}</td>
        </tr>
      );
    });
  };
  return (
    <table>
      <tbody>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>firstname</th>
          <th>surname</th>
          <th>email</th>
          <th>room id</th>
          <th>check in date</th>
          <th>check out date</th>
          <th>nights</th>
        </tr>
        {tdMap()}
      </tbody>
    </table>
  );
};

export default SearchResults;
