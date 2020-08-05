import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { action_deleteTechnician } from '../../actions/technicianActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechnicianItem = (
  {
    prop_technician_data: { id, firstName, lastName }, // use TechListModal's prop to pass in technician data obj
    action_deleteTechnician }) => {

  const onDelete = () => {
    action_deleteTechnician(id);
    M.toast({ html: 'Technician deleted' });

  };

  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechnicianItem.propTypes = {
  prop_technician_data: PropTypes.object.isRequired,
  action_deleteTechnician: PropTypes.func.isRequired
};

// Map state to prop if necessary:
// const mapStateToProps = state => ({
//   techniciansData: state.technicians
// });

export default connect(
  null,
  { action_deleteTechnician }
)(TechnicianItem);
