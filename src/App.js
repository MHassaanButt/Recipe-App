import React, { useEffect, useState } from "react";

import "./App.css";

const App = () => {
  const APP_ID = "a0037a7a";
  const APP_KEY = "e4bd74e2af0fdbf134842ab7a41db57d";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Use Effect is working");
  });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
