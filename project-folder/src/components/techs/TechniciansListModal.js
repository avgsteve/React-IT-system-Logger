import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechnicianItem from './TechnicianItem';
import { action_getTechnicians } from '../../actions/technicianActions';

const TechnicianListModal = ({ action_getTechnicians, techniciansData: { technicians, loading } }) => {
  useEffect(() => {
    action_getTechnicians();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='technicians-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            technicians !== null &&
            technicians.map(tech =>
              <TechnicianItem prop_technician_data={tech} key={tech.id} />
            )}
        </ul>
      </div>
    </div>
  );
};

TechnicianListModal.propTypes = {
  techniciansData: PropTypes.object.isRequired,
  action_getTechnicians: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  techniciansData: state.technicians_data_in_store
});

export default connect(
  mapStateToProps,
  { action_getTechnicians }
)(TechnicianListModal);
