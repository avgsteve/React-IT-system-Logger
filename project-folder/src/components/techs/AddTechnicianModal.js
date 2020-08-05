import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { action_addTechnician } from '../../actions/technicianActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechnicianModal = ({ action_addTechnician }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      action_addTechnician({
        firstName,
        lastName
      });

      M.toast({ html: `New technician: ${firstName} ${lastName} was added` });

      // Clear Fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-technician-modal' className='modal'>
      <div className='modal-content'>
        <h4>Add New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechnicianModal.propTypes = {
  action_addTechnician: PropTypes.func.isRequired
};

export default connect(
  null,
  { action_addTechnician }
)(AddTechnicianModal);
