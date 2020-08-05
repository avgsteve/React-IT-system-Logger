import React,
{
  useState
} from 'react';
// --- connect this Component with Redux store & action function  ---
import { connect } from 'react-redux';
import { actionAddNewLog } from '../../actions/logActions';

import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import TechnicianSelectOptions from '../techs/AddTechnicianModal';



// need to pass argument "actionAddNewLog" because of "connect" function
const AddLogModal = ({ actionAddNewLog }) => {

  //
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState('');


  //function for submit action: <a href="#!" onClick={onSubmit}
  const onSubmit = (submit_Event) => {

    // submitEvent.preventDefault();

    // Check if all the required message and technician data are entered
    if (message === '' || technician === '') {
      // if not entered correctly, display error message
      M.toast(
        { html: 'Please make sure you have entered both message and technician' }
      ); //ref: https://materializecss.com/toasts.html

    } else {

      const new_log_data = {
        message: message,
        attention: attention,
        tech: technician,
        date: new Date(),
      };

      actionAddNewLog(new_log_data);

      // console.log("\nmessage: ", message, "\nattention: ", attention, "\ntechnician: ", technician);

      // after submitting the form, clearing data in input field 
      setMessage("");
      setTechnician("");
      setAttention(false);

      M.toast({ html: `Log added by ${technician}` });

      // setTimeout(() => {     // close the modal
      //   let formModal = document.getElementById("add-log-modal");
      //   let instance = M.Modal.getInstance(formModal);
      //   instance.close();
      // }, 1000);

    }
  };

  // inline CSS for div element id='add-log-modal 
  const modalStyle = {
    width: '75%',
    height: '75%'
  };



  return (

    <div id='add-log-modal' className="modal" style={modalStyle} >
      {/* // The prop id='add-log-modal' must match the element in AddBtn.js:    <a href="#add-log-modal"   */}


      {/* === Main content in Modal === */}

      <div className="modal-content">
        <h4>Enter New System Log</h4>


        {/* --- first ROW: Input Log message --- */}
        <div className="row">
          <div className="input-field">
            <input type="text" name='message' value={message}
              onChange={event => setMessage(event.target.value)}
            // Use onChange to dynamically get input value and save it in state setter : setMessage
            />

            <label htmlFor="message" className='active'>
              Log Message </label>
          </div>
        </div>


        {/* --- second ROW: Select technician ---  
          */}
        <div className="row">
          <div className="input-field">

            <select name="technician" value={technician}
              className='browser-default'
              // Use className='browser-default' to pre-select default technician if available
              onChange={e => setTechnician(e.target.value)}
            // Use onChange to dynamically get input value and save it in state setter : setMessage
            >
              <option value='' disabled> == Select technician == </option>
              <TechnicianSelectOptions />
            </select>

          </div>
        </div>


        {/* --- third ROW: Checkbox for switching ATTENTION state ---  */}
        <div className="row">
          <div className="input-field">

            <p>
              <label>
                <input type="checkbox" className="filled-in"
                  checked={attention} value={attention}
                  onChange={value => setAttention(!attention)}
                // use !attention to reverse the current attention state
                />
                <span>Needs Attention</span>
              </label>
            </p>

          </div>
        </div>


      </div> {/* end of <  di v className="modal-content"> */}

      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-blue blue btn"> Enter </a>
      </div>

      {/* end of outermost div */}
    </div>

  ); // end of return block

};


AddLogModal.propTypes = {
  actionAddNewLog: PropTypes.func.isRequired,
};



// export default AddLogModal; // original way of export Component

// Now export Component with "connect" function
// (mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

export default connect(
  null, // bring NO state from current store to AddLogModal Component as "prop" because only want to call the function actionAddNewLog for the main purpose of only adding new data

  { actionAddNewLog }// use action/dispatch inside Logs Component as "prop"
)(AddLogModal); // connect this Logs Component with Redux store before export default



// ref: https://react-redux.js.org/api/connect#connect-parameters