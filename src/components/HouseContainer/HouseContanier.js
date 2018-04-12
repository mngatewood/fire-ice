import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export const HouseContainer = (houses) => {
  console.log(houses)


  return("hello")

}

const mapStateToProps = state => ({
  houses: state.houses
});

HouseContainer.propTypes = {
  houses: PropTypes.array,
};

export default connect(mapStateToProps)(HouseContainer);
