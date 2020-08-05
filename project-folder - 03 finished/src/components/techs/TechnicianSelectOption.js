// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { actionGetTechnicians } from '../../actions/technicianAction';

// const TechnicianSelectOption = ({
//   technicians_data: { technicians, loading }, actionGetTechnicians }) => {

//   useEffect(
//     () => {
//       actionGetTechnicians(); // 
//     }, [
//     // actionGetTechnicians
//   ]);

//   return (!loading && technicians !== null && technicians.map(technician =>
//     (
//       <option key={technician.id} value={`${technician.firstName} ${technician.lastName}`}>
//         {t.firstName} {t.lastName}</option>
//     )));
// };

// TechnicianSelectOption.prototype = {
//   actionGetTechnicians: PropTypes.func.isRequired,
//   technicians_data: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   technicians_data: state.combined_technician_reducers,
// });

// export default connect(mapStateToProps, { actionGetTechnicians })(TechnicianSelectOption);






import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    techs !== null &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechSelectOptions);
