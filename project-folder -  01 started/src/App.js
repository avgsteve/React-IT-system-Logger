import React, {
  // Fragment,
  useEffect
} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css';

function App() {

  useEffect(
    () => {
      // let Materialize JavaScript to init automatically // ref: https://tinyurl.com/y5mvnhom
      M.AutoInit();

    }, [] // don't need to call it on every render
  );

  return (
    <div className="App">
      My App
    </div>
  );

};

export default App;
