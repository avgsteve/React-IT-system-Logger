import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader_status_bar from '../layout/Preloader_status_bar';
import PropTypes from 'prop-types';
import { action_getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs_in_array, loading }, action_getLogs }) => {
  useEffect(() => {
    action_getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs_in_array === null) {
    return <Preloader_status_bar />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs_in_array.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
          logs_in_array.map(log => <LogItem prop_log_Data={log} key={log.id} />)
        )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  action_getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log_data_in_store
});

export default connect(
  mapStateToProps,
  { action_getLogs }
)(Logs);
