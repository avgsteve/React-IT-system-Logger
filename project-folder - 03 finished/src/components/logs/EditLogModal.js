import React,
{
  useState,
  useEffect
} from 'react';

import { connect } from 'react-redux';
import { actionUpdateLog } from '../../actions/logActions';

import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';




const EditLogModal = ({ current_Log, actionUpdateLog }) => {

  // (after clicking the <a> in title) Fill out the input field by using functions from setState 
  useEffect(() => { // use "current_Log" from props to 
    if (current_Log) {

      setMessage(current_Log.message);
      setAttention(current_Log.attention);
      setTechnician(current_Log.tech);
    }
  }, [current_Log]);


  // Change the value in the variables which are going to be used to update the current_Log data when submitting the form, 
  const [input_message, setMessage] = useState('');
  const [input_attention, setAttention] = useState(false);
  const [input_technician, setTechnician] = useState('');



  // Submit the form to update data (by clicking <a href="#!" onClick={onSubmit} )
  const onSubmit = (submitEvent) => {

    // submitEvent.preventDefault();

    // Check if all the required message and technician data are entered
    if (input_message === '' || input_technician === '') {
      // if not entered correctly, display error message
      M.toast(
        { html: 'Please you have entered both message and technician' }
      ); //ref: https://materializecss.com/toasts.html

    } else {

      const updated_log = {
        id: current_Log.id, // use the same id as original log
        message: input_message,
        attention: input_attention,
        tech: input_technician,
        data: new Date(),
      };

      actionUpdateLog(updated_log);

      M.toast(
        { html: `Log id:${current_Log.id} has been updated!` }
      ); //ref: https://materializecss.com/toasts.html

    }

  };

  // inline CSS for div element id='add-log-modal 
  const modalStyle = {
    width: '75%',
    // height: '75%'
    padding: '3.5vh',
  };



  return (
    <div id='edit-log-modal' className="modal" style={modalStyle} >
      {/* // The prop id='edit-log-modal' must match the element in LogItem.js:    <a href="#edit-log-modal"   */}


      {/* === Main content in Modal === */}

      <div className="modal-content">
        <h4>Enter System Log</h4>


        {/* --- first ROW: Input Log message --- */}
        <div className="row">
          <div className="input-field">
            <input type="text" name='message' value={input_message}
              onChange={event => setMessage(event.target.value)}
            // Use onChange to dynamically get input value and save it in state setter : setMessage
            />

            <label htmlFor="message" className={current_Log && "active"}>  Log Message  </label>


          </div>
        </div>


        {/* --- second ROW: Select technician ---  
          */}        <div className="row">
          <div className="input-field">

            <select
              name="technician" className='browser-default'
              // Use className='browser-default' to pre-select default technician if available
              value={input_technician}
              onChange={e => setTechnician(e.target.value)}
            // Use onChange to dynamically get input value and save it in state setter : setMessage
            >

              <option value="" disabled> == Select technician == </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Steve Leng">Steve Leng</option>
              <option value="Sara Wilson">Sara Wilson</option>

            </select>

          </div>
        </div>


        {/* --- third ROW: Checkbox for switching ATTENTION state ---  */}
        <div className="row">
          <div className="input-field">

            <p>
              <label>
                <input type="checkbox" id="input-field-message" className="filled-in"
                  checked={input_attention} value={input_attention}
                  onChange={value => setAttention(!input_attention)}
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

EditLogModal.propTypes = {
  actionUpdateLog: PropTypes.func.isRequired,
  current_Log: PropTypes.object,
};



const mapStateToProps = state => ({
  current_Log: state.combined_log_reducers.current_editing_log, // get the log data from store's "current_editing_log" and pass it in to EditeLogModal Component as Props
});



// original way of export Component: export default EditLogModal;

// Now export Component with "connect" function
// (mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

export default connect(
  mapStateToProps, // bring NO state from current store to AddLogModal Component as "prop" because only want to call the function actionAddNewLog for the main purpose of only adding new data

  { actionUpdateLog }// use action/dispatch inside Logs Component as "prop"
)(EditLogModal); // connect this Logs Component with Redux store before export default



// ref: https://react-redux.js.org/api/connect#connect-parameters