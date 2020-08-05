import React,
{
  // useState,
  useEffect
} from 'react';

// === Redux modules ===
import {
  connect // connect this component (with export keyword) to Redux store
} from 'react-redux';

// === Other modules ===
import PropTypes from 'prop-types'; // emmet: impt
import { getLogs } from '../../actions/logActions'; // returns a async dispatch function


// === Component ===
import LogItem from './logItem'; // wrong path name fixed
import PreloaderProgressBar from '../layout/Preloader_progressBar';

// ==== MAIN FUNCTION: GET logs data from Redux store by connect module ====
// & RENDER data with returning Modal in HTML/JSX block
const Logs = (
  { // Use prop data from "connect"
    log: { logs, loading }, // log is the data "object" from state
    getLogs // the prop "action" function & "dispatch"
  }) => {

  // Call "getLogs" action and send dispatch to store to set & read new data from server
  useEffect(
    () => {

      // console.log('\n=== "useEffect" in Logs.js initiated ===\n\n');

      getLogs();

      // eslint-disable-next-line
    }, []);

  // console.log('\nThe props of "logs" & "loading" in Component "Log.js": \n', logs, loading);

  // ==== MAIN FUNCTIONALITY ==== //

  // Condition: Is data still being loaded?
  if (loading || logs === null) {
    return (
      <PreloaderProgressBar /> // showing loading icon

      // If logs is null, then the bar will keep showing and doesn't stop
    );
  }

  // 
  const style_collection_header = {
    margin: '-10px 0px 5px 0px',
    padding: '0px 0px 5px 0px'

  };


  return (

    <ul className="collection with-header">

      <li className="collection-header" style={style_collection_header}>
        <h4 className="center">System Logs</h4>
      </li>

      { // is loading finished and NO data exists? 
        !loading && logs.length === 0 ?

          // If true, render <p>
          (<p className="center">No logs to show...</p>
          )

          // Else: The data exists then render it to <li> by using <LogItem />
          : (
            logs.map(log =>

              <LogItem prop_log={log} key={log.id} />)
          )

      }

    </ul>



  );
};



Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};


const mapStateToProps = state => (
  {
    log: state.combined_log_reducers,

    // data_for_combined_log_reducers is the property name from Redux store which created with  combined Reducer (from reducers/index.js)
  }
);



// export default Logs; // original way of export Component

// Now export Component with "connect" function
// (mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

export default connect(
  mapStateToProps, // use state inside Logs Component as "prop"
  { getLogs }// use action/dispatch inside Logs Component as "prop"
)(Logs); // connect this Logs Component with Redux store before export default



// ref: https://react-redux.js.org/api/connect#connect-parameters