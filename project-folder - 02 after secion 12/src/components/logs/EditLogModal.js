import React,
{
  useState
} from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {

  //
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState('');


  //function for submit action: <a href="#!" onClick={onSubmit}
  const onSubmit = (submitEvent) => {

    // submitEvent.preventDefault();

    // Check if all the required message and technician data are entered
    if (message === '' || technician === '') {
      // if not entered correctly, display error message
      M.toast(
        { html: 'Please you have entered both message and technician' }
      ); //ref: https://materializecss.com/toasts.html

    } else {
      console.log("\nmessage: ", message, "\nattention: ", attention, "\ntechnician: ", technician);

      // after submitting the form, resetting form data from fields
      setMessage("");
      setTechnician("");
      setAttention(false);
      // close the modal
      let formModal = document.getElementById("add-log-modal");
      let instance = M.Modal.getInstance(formModal);
      instance.close();

    }

  };

  // inline CSS for div element id='add-log-modal 
  const modalStyle = {
    width: '75%',
    height: '75%'
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
            <input type="text" name='message' value={message}
              onChange={event => setMessage(event.target.value)}
            // Use onChange to dynamically get input value and save it in state setter : setMessage
            />

            <label htmlFor="message" className='active'>
              Log Message </label>
          </div>
        </div>


        {/* --- second ROW: Select technician ---  
          */}        <div className="row">
          <div className="input-field">

            <select
              name="technician" className='browser-default'
              // Use className='browser-default' to pre-select default technician if available
              value={technician}
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



export default EditLogModal;
