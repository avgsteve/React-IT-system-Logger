import React,
{
    useState
} from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechnicianModal = () => {

    // state for global data (within this component)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    // MAIN function for submit action: <a href="#!" onClick={onSubmit}
    const onSubmit = (submitEvent) => {

        submitEvent.preventDefault();

        // Check if all the required first and last name are entered
        if (firstName === '' || lastName === '') {
            // if not entered correctly, display error message
            M.toast(
                { html: 'Please make sure you have entered both first and last name' }
            ); //ref: https://materializecss.com/toasts.html

        } else {
            console.log("\nfirstName: ", firstName, "\nlastName: ", lastName);

            // after submitting the form, resetting form data
            setFirstName("");
            setLastName("");

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
        <div id='add-technician-modal' className="modal" style={modalStyle} >
            {/* // The prop id='add-log-modal' must match the element in AddBtn.js:    <a href="#add-log-modal"   */}

            {/* === Main content in Modal === */}

            <div className="modal-content">
                <h4>New Technician</h4>

                {/* --- first ROW: Input First Name --- */}
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='firstName' value={firstName}
                            onChange={event => setFirstName(event.target.value)}
                        />

                        <label htmlFor="firstName" className='active'>
                            First Name </label>
                    </div>
                </div>

                {/* --- Second ROW: Input Last Name --- */}
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lastName' value={lastName}
                            onChange={event => setLastName(event.target.value)}
                        // Use onChange to dynamically get input value and save it in state setter : setMessage
                        />

                        <label htmlFor="lastName" className='active'>
                            Last Name </label>
                    </div>
                </div>



            </div> {/* end of <  div className="modal-content"> */}

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-blue blue btn"> Enter </a>
            </div>

            {/* end of outermost div */}
        </div>

    ); // end of return block

};



export default AddTechnicianModal;
