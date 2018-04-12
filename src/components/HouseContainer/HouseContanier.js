import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { House } from '../House/House';

const HouseContainer = (props) => {
  props.houses.map(house => {
    return <House 
      key={house.name}
      name={house.name}
      founded={house.founded}
      seats={house.seats}
      titles={house.titles}
      coatOfArms={house.coatOfArms}
      ancestralWeapons={house.ancestralWeapons}
      words={house.words}
    />;
  });

  return <div>
  </div>;

};

const mapStateToProps = (state) => ({
  houses: state.houses
});

HouseContainer.propTypes = {
  houses: PropTypes.array
};

export default connect(mapStateToProps)(HouseContainer);

