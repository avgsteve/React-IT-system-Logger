import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { action_getTechnicians } from '../../actions/technicianActions';

const TechnicianSelectOptions = ({ action_getTechnicians, techniciansData: { technicians, loading } }) => {
  useEffect(() => {
    action_getTechnicians();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    technicians !== null &&
    technicians.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechnicianSelectOptions.propTypes = {
  techniciansData: PropTypes.object.isRequired,
  action_getTechnicians: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  techniciansData: state.technicians_data_in_store
});

export default connect(
  mapStateToProps,
  { action_getTechnicians }
)(TechnicianSelectOptions);
