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
import Logs from './components/logs/Logs';  // List system logs
import AddBtn from './components/layout/AddBtn'; // round btn for activing Modal
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechnicianModal from './components/techs/AddTechnicianModal';
import TechniciansListModal from './components/techs/TechnicianListModal';
// ===== Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {

  useEffect(
    () => {
      // let Materialize JavaScript to init automatically and globally
      // ref: https://tinyurl.com/y5mvnhom
      M.AutoInit();

    }, [] // don't need to call it on every render
  );


  return (
    <Provider store={store}>

      <Fragment>

        <SearchBar />

        <div className="container">
          <AddBtn />
          <AddLogModal />
          <AddTechnicianModal />
          <TechniciansListModal />


          <EditLogModal />
          <Logs />
        </div>

      </Fragment>

    </Provider>
  );

};

export default App;
