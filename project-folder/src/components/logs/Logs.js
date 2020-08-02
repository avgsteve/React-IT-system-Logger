import React,
{
  useState, useEffect
} from 'react';

//Component
import LogItem from './LogItem'; // wrong path name fixed
import PreloaderProgressBar from '../layout/Preloader_progressBar';

// GET logs data & RENDER
const Logs = () => {

  // State containers for data for rendering component
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);


  // get data from API
  const getLogsfromAPI = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/logs');
    const data = await res.json();

    setLogs(data);

    // this is to show the loading progress bar
    setTimeout(() => {
      setLoading(false); // turn off the bar
    }, 1000); // in 1 second

  };

  // Use data of logs while component is mounted
  useEffect(
    () => {
      getLogsfromAPI(); // 
    }, []);


  // ==== MAIN FUNCTIONALITY ==== //

  // Condition: Is data still being loaded?
  if (loading) {
    return (
      // <h4>Loading...</h4> // changed to below
      <PreloaderProgressBar /> // showing loading icon
    );
  }

  // 
  const style_collection_header = {
    margin: '-10px 0px 5px 0px',
    padding: '0px 0px 5px 0px'

  };


  return (

    <ul className="collection with-header">

      <li className="collection-header" style={style_collection_header}>
        <h4 className="center">System Logs</h4>
      </li>

      { // is loading finished and NO data exists? 
        !loading && logs.length === 0 ?

          // If true, render <p>
          (<p className="center">No logs to show...</p>
          )

          // Else: The data exists then render it to <li> by using <LogItem />
          : (
            logs.map(log =>

              <LogItem prop_log={log} key={log.id} />)
          )

      }

    </ul>



  );
};

export default Logs;