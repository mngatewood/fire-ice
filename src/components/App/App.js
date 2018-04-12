import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import { getHouseData } from '../../api/apiCalls/getHouseData';
import HouseContainer from '../HouseContainer/HouseContanier';

class App extends Component {

  async componentDidMount() {
    const houseData = await getHouseData();
    console.log(houseData);
    this.props.addHouses(houseData);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <button onClick={() => {
            this.props.fakeAction();
            alert(this.props.fake);
          }}> FAKE ACTION</button>
        </div>
        <div className='Display-info'>
          <HouseContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  addHouses: func,
  getHouseData: func
};

// const mapStateToProps = ({ fake }) => ({ fake });

const mapDispatchToProps = dispatch => ({ 
  addHouses: houses => dispatch(addHouses(houses))
});

export default connect(null, mapDispatchToProps)(App);
