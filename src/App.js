import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://localhost:8000/trains');
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchTrains();
  }, []);

  return (
    <div className="App">
      <h1>All Trains Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Seats Available (Sleeper)</th>
            <th>Seats Available (AC)</th>
            <th>Price (Sleeper)</th>
            <th>Price (AC)</th>
            <th>Delayed By (Minutes)</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.trainNumber}>
              <td>{train.trainNumber}</td>
              <td>{train.trainName}</td>
              <td>
                {train.departureTime.Hours}:{train.departureTime.Minutes}:
                {train.departureTime.Seconds}
              </td>
              <td>{train.seatsAvailable.sleeper}</td>
              <td>{train.seatsAvailable.AC}</td>
              <td>{train.price.sleeper}</td>
              <td>{train.price.AC}</td>
              <td>{train.delayedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
