import React from ‘react’;
import PropTypes from ‘prop-types’;

export const HouseContainer = () => {

  return(
    
  )
}

export const mapStateToProps = state => ({
  houses: state.houses,
});

Stuff.propTypes = {
  houses: PropTypes.array,
};

export default withRouter(connect(MapStateToProps)(HouseContainer));