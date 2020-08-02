import React, {
  Fragment,
  useEffect
} from 'react';
// ===== Files for using Materialize CSS
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
// ===== Components
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';



function App() {

  useEffect(
    () => {
      // let Materialize JavaScript to init automatically // ref: https://tinyurl.com/y5mvnhom
      M.AutoInit();

    }, [] // don't need to call it on every render
  );


  return (

    <Fragment>

      <SearchBar />

      <div className="container">
        <Logs />
      </div>

    </Fragment>

  );

};

export default App;
