import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight > 0 && height > 0) {
       const heightInInches = height * 0.393701;
      const calculatedBMI = (weight / (heightInInches * heightInInches)) * 703;
      setBmi(calculatedBMI.toFixed(2));
    } else {
      alert("Please enter valid positive numbers for weight and height.");
    }
  };

  const handleReload = () => {
    setWeight('');
    setHeight('');
    setBmi('');
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter the Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type="text"
              placeholder="Enter the Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="reload" type="button" onClick={handleReload}>
              Reload
            </button>
          </div>
        </form>
        {bmi && (
          <div className="result">
            <h3>Your BMI: {bmi}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
