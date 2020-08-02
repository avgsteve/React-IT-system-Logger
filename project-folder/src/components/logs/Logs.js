import React,
{
  useState, useEffect
} from 'react';


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
    setLoading(false);
  };

  // Use data of logs while component is mounted
  useEffect(
    () => {
      getLogsfromAPI(); // 
    }, []);

  // Condition: Is data still being loaded?
  if (loading) {
    return (
      <h4>Loading...</h4>
    );
  }


  const style_collection_header = {
    margin: '20px 0px'
  };


  return (

    <ul className="collection-with-header">

      <li className="collection-header" style={style_collection_header}>
        <h4 className="center">System Logs</h4>
      </li>

      { // is loading finished and NO data exists? 
        !loading && logs.length === 0 ?
          (<p className="center">No logs to show...</p>
          )

          // The data exists then render it to <li>
          : (logs.map(log =>
            <li> {log.message} </li>)
          )

      }

    </ul>



  );
};

export default Logs;