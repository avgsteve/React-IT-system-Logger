import React from 'react';

const AddBtn = () => {

    return (

        <div className="fixed-action-btn">


            {/*  ==== Main Tier (Big Icon) button with plus sign ==== */}

            {/*  Reference:
                 modal:    https://materializecss.com/modals.html#!
                 buttons:  https://materializecss.com/buttons.html
                 icons:    https://materializecss.com/icons.html
              */}

            {/* a.btn-floating.btn-large.blue.darken-2.modal-trigger */}
            <a href="#add-log-modal" className="btn-floating btn-large blue darken-2 modal-trigger">

                <i className="large material-icons">add</i>

            </a>


            {/*  --- Secondary Tier (Nested Icons) buttons with plus sign --- */}
            <ul>

                <li>
                    <a href="#tech-modal" className="btn-floating red modal-trigger">
                        <i className="material-icons" alt="Add new person"> person_add </i>
                    </a>
                </li>


                <li>
                    <a href="#tech-list-modal" className="btn-floating green modal-trigger">
                        <i className="material-icons">person</i>
                    </a>
                </li>

            </ul>


        </div>
    );

};

export default AddBtn;
