import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  action_deleteLog,
  action_setAsCurrentEditing
} from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({
  prop_log_Data,
  action_deleteLog,
  action_setAsCurrentEditing
}) => {

  const onDelete = () => {
    action_deleteLog(prop_log_Data.id);
    M.toast({ html: `Log id:${prop_log_Data.id} Deleted` });

  };

  return (

    <li className='collection-item'>

      <div>

        {/* === Log message and attention state === */}

        <a href='#edit-log-modal'
          className={`modal-trigger ${
            prop_log_Data.attention ? 'red-text' : 'blue-text'
            }`}
          onClick={() => action_setAsCurrentEditing(prop_log_Data)}
        >
          {prop_log_Data.message} </a>
        <br />

        {/* === Log info & details === */}

        <span className='grey-text'>
          <span className='black-text'>ID #{prop_log_Data.id}</span> last updated by{' '}
          <span className='black-text'>{prop_log_Data.technician}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{prop_log_Data.date}</Moment>
        </span>

        {/* === DELETE BUTTON (using: prop_log_Data.id) === */}

        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>

      </div>

    </li>
  );
};

LogItem.propTypes = {
  prop_log_Data: PropTypes.object.isRequired,
  action_deleteLog: PropTypes.func.isRequired,
  action_setAsCurrentEditing: PropTypes.func.isRequired
};

export default connect(
  null,
  { action_deleteLog, action_setAsCurrentEditing }
)(LogItem);
