import React,
{
  // useState, 
  useEffect
} from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionGetTechnicians } from '../../actions/technicianAction';

import TechniciansItem from './TechnicianItem';


// GET TECHNICIANS data & RENDER
const TechniciansListModal = ({ technicians_data: { technicians, loading }, actionGetTechnicians }) => {

  // // get technicians data from API
  // const getTechniciansFromAPI = async () => {
  //   setLoading(true);
  //   const res = await fetch('http://localhost:5000/technicians');
  //   const data = await res.json();

  //   setTechnicians(data);

  //   // this is to show the loading progress bar
  //   setTimeout(() => {
  //     setLoading(false); // turn off the bar
  //   }, 1000); // in 1 second

  // };

  // Use data of technicians while component is mounted
  useEffect(
    () => {
      actionGetTechnicians(); // 
    }, [
    actionGetTechnicians
  ]);


  // ==== MAIN FUNCTIONALITY: listing all technicians ==== //

  return (

    <div id="technicians-list-modal" className="modal">
      <div className="modal-content">

        <h4>Technicians List</h4>

        <ul className="collection">

          { // if loading has finished & then iterate technicians data

            !loading && technicians !== null && technicians.map(data =>
              ( // use <li> to show technicians' name
                <TechniciansItem technicianData={data} key={data.id} />

              )
            )

          }

        </ul>

      </div>
    </div>

  );
};

TechniciansListModal.prototype = {
  actionGetTechnicians: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  technicians_data: state.combined_technician_reducers,
});

export default connect(mapStateToProps, { actionGetTechnicians })(TechniciansListModal);