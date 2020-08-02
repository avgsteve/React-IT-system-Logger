import React from 'react';

// emmet rafc
export const SearchBar = () => {
  return (
    //ref:  https://materializecss.com/navbar.html  ==> Search Bar

    <nav style={{ marginBottom: '30px' }} className="blue" >
      {/* (Use CSS style in class name with materialize) */}

      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input id="search" type="search" placeholder="Seach something here" />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>


  );
};

export default SearchBar;