import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionSearchLogs } from '../../actions/logActions';

// emmet rafc
export const SearchBar = ({ actionSearchLogs }) => {

  const text = useRef('');


  const searchWhenTyping = e => {

    setTimeout(
      () => {
        actionSearchLogs(text.current.value);
      }, 300
    );

  };



  return (
    //ref:  https://materializecss.com/navbar.html  ==> Search Bar

    <nav style={{ marginBottom: '30px' }} className="blue" >
      {/* (Use CSS style in class name with materialize) */}

      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Seach something here"
              ref={text} onChange={searchWhenTyping} />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>


  );
};


SearchBar.propTypes = {
  actionSearchLogs: PropTypes.func.isRequired,
};

export default connect(null, { actionSearchLogs })(SearchBar);

