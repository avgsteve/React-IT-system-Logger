import React from 'react';
import PropTypes from 'prop-types';

const TechnicianItem = ({ technicianData }) => {

    return (
        <li className="collection-item">

            {/* Display technicians data */}
            <div>
                {technicianData.firstName} {technicianData.lastName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>

        </li>
    );

};

TechnicianItem.propTypes = {
    technicianData: PropTypes.object.isRequired,
};

export default TechnicianItem;
