import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import TechnicianSelectOptions from '../techs/TechnicianSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import { action_updateLog } from '../../actions/logActions';


const EditLogModal = ({ current_log_for_editing, action_updateLog }) => {

  const input_field_message = useRef(null); // to set focus on input field (message_input)

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [technician, setTech] = useState('');

  useEffect(() => {
    if (current_log_for_editing) {
      // document.getElementsByName("message_input")[1].focus();
      input_field_message.current.focus();
      setMessage(current_log_for_editing.message);
      setAttention(current_log_for_editing.attention);
      setTech(current_log_for_editing.tech);
    }
  }, [current_log_for_editing]);

  const onSubmit = () => {
    if (message === '' || technician === '') {
      M.toast({ html: 'Please enter a message and tech' });
    } else {
      const updLog = {
        id: current_log_for_editing.id,
        message,
        attention,
        technician,
        date: new Date()
      };

      action_updateLog(updLog);
      M.toast({ html: `Log updated by ${technician}` });

      // Clear Fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message_input'
              value={message} ref={input_field_message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message_input" className="active">
              Update Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={technician}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <TechnicianSelectOptions />
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: '75%',
  height: '75%'
};

EditLogModal.propTypes = {
  current_log_for_editing: PropTypes.object,
  action_updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current_log_for_editing: state.log_data_in_store.current_editing
});

export default connect(
  mapStateToProps,
  { action_updateLog }
)(EditLogModal);
