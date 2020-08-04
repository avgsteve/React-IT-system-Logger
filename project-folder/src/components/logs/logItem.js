import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment'; // generate formatted time stamp

import M from 'materialize-css/dist/js/materialize.min.js';

import { connect } from 'react-redux';
import {
  actionDeleteLogWithId,
  actionSetCurrent,
} from '../../actions/logActions';


// emmet rafcp

// The component for displaying li element inside ul in Logs.js
const logItem = (
  { prop_log, // prop for log data in <logItem /> in Logs.js
    actionDeleteLogWithId, // calls action and DELETE dispatch
    actionSetCurrent, // click one log item and assign it's the value to store's property "current_editing_log" for pop-up window:  <div id='edit-log-modal'>
  }
) => {

  // === CSS styles in JSX ===
  const style_log_container = {
    'padding': '10x 0px 10px 0px',
  };

  const style_log_title = {
    'fontSize': '1.4rem',
    // 'marginTop': '25x', // can't apply
    'lineHeight': '2.5rem',
  };

  // === DELETE data from DB with action & its dispatch function ===
  const clickAndDeleteLog = () => {

    actionDeleteLogWithId(prop_log.id); // use current log's id to call the action & dispatch for reducer case "DELETE_LOG"

    M.toast(
      { html: 'Log deleted' }
    ); //ref: https://materializecss.com/toasts.html

  };


  return (

    <li className="collection-item" style={style_log_container}>

      <div>

        {/* === First line of log: Title === */}

        <a href="#edit-log-modal" style={style_log_title}
          className={`modal-trigger           
          ${ prop_log.attention ? 'red-text' : 'blue-text'} `}
          onClick={() => actionSetCurrent(prop_log)} >

          {prop_log.message} </a>

        {/* ref for "modal" and using class name "modal trigger" 
         in <a> inside <li>: https://materializecss.com/modals.html#! */}


        <br />

        {/* === Second line of log: Log Id, technician and log date & time === */}

        {/* in-inline text for Log DETAILS composited of span tags */}
        <span className="grey-text">

          <span className="black-text"> Log ID #{prop_log.id}
          </span>

          {' '}last update by technician:{' '}

          <span className="black-text technician-name">
            {prop_log.tech}
          </span>

          {' on '}

          <Moment format='MMMM Do YYYY, h:mm:ss a'>
            {prop_log.data}
            {/* ref for time format with Moment: 
            https://momentjs.com/docs/#/parsing/string-format/ */}
          </Moment>


        </span>



        {/* === TRASH CAN Button for DELETING data ===*/}
        <a href="#!" className="secondary-content" onClick={clickAndDeleteLog}>
          <i className="material-icons grey-text"> delete </i> </a>


      </div>

    </li >


  );

};

//

logItem.propTypes = {
  prop_log: PropTypes.object.isRequired,
  actionDeleteLogWithId: PropTypes.func.isRequired,
  actionSetCurrent: PropTypes.func.isRequired,
};


// original way of export Component:  export default logItem;

// Now export Component with "connect" function
// (mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

export default connect(
  null, // use state inside Logs Component as "prop"
  { actionDeleteLogWithId, actionSetCurrent }// use action/dispatch inside Logs Component as "prop"
)(logItem); // connect this Logs Component with Redux store before export default


