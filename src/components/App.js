/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import '../css/App.css';
import Weather from "./Weather";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Weather defaultCity="Philadelphia" />
      <footer>
        This project was coded by <a href="https://www.linkedin.com/in/katerina-papaloukas-scoullos/">Katerina Scoullos</a> and is {""}
        <a href="https://github.com/codingwithkat/shecodesplus-final" target="_blank">open-sourced on GitHub.</a> <span role="img" alt="eyeglass emoji">🤓</span>
      </footer>

    </div>
  );
}

export default App;
