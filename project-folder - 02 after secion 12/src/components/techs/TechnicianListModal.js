import React,
{
  useState, useEffect
} from 'react';

import TechniciansItem from './TechnicianItem';


// GET TECHNICIANS data & RENDER
const TechniciansListModal = () => {

  // State containers for data for rendering component
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(false);


  // get technicians data from API
  const getTechniciansFromAPI = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/technicians');
    const data = await res.json();

    setTechnicians(data);

    // this is to show the loading progress bar
    setTimeout(() => {
      setLoading(false); // turn off the bar
    }, 1000); // in 1 second

  };

  // Use data of technicians while component is mounted
  useEffect(
    () => {
      getTechniciansFromAPI(); // 
    }, []);


  // ==== MAIN FUNCTIONALITY: listing all technicians ==== //

  return (

    <div id="technicians-list-modal" className="modal">
      <div className="modal-content">

        <h4>Technicians List</h4>

        <ul className="collection">

          { // if loading has finished & then iterate technicians data
            !loading && technicians.map(data =>
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

export default TechniciansListModal;