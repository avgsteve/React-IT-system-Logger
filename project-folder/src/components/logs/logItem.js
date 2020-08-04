import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment'; // generate formatted time stamp

// emmet rafcp

// The component for displaying li element inside ul in Logs.js
const logItem = (
  { prop_log }  // receive log data object from API via props from parent Component Logs.js
) => {

  const style_log_container = {
    'padding': '10x 0px 10px 0px',
  };

  const style_log_title = {
    'fontSize': '1.4rem',
    // 'marginTop': '25x', // can't apply
    'lineHeight': '2.5rem',
  };

  return (

    <li className="collection-item" style={style_log_container}>

      <div>

        {/* === First line of log: Title === */}

        <a href="#edit-log-modal" style={style_log_title}
          className={`modal-trigger           
          ${ prop_log.attention ? 'red-text' : 'blue-text'} `}
        > {prop_log.message} </a>

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



        {/* Button */}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text"> delete </i>
        </a>


      </div>

    </li >


  );

};

//

logItem.propTypes = {
  log_data_from_Logs_prop: PropTypes.object.isRequired,
};

export default logItem;
