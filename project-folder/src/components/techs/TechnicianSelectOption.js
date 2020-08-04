import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionGetTechnicians } from '../../actions/technicianAction';

const TechnicianSelectOption = ({
  technicians_data: { technicians, loading }, actionGetTechnicians }) => {

  useEffect(
    () => {
      actionGetTechnicians(); // 
    }, [
    // actionGetTechnicians
  ]);

  return (


    !loading && technicians !== null && technicians.map(technician =>
      (<option key={technician.id}
        value={`${technician.firstName} ${technician.lastName}`}>
        {`${technician.firstName} ${technician.lastName}`}
      </option>
      )
    )

  );
};

TechnicianSelectOption.prototype = {
  actionGetTechnicians: PropTypes.func.isRequired,
  technicians_data: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  technicians_data: state.combined_technician_reducers,
});

export default connect(mapStateToProps, { actionGetTechnicians })(TechnicianSelectOption);