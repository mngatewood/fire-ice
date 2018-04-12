import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const HouseContainer = (props) => {
  console.log(props.houses)

  return <div>
  </div>

}

const mapStateToProps = (state) => ({
  houses: state.houses
});

HouseContainer.propTypes = {
  houses: PropTypes.array
};

export default connect(mapStateToProps)(HouseContainer);

