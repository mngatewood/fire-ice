import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addHouses } from '../../actions';
import { getHouseData } from '../../api/apiCalls/getHouseData';
import HouseContainer from '../HouseContainer/HouseContanier';
import wolf from '../../wolf.gif';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    const houseData = await getHouseData();
    this.setState({ isLoading: false })
    this.props.addHouses(houseData);
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
          <img 
            id="wolf"
            src={wolf} 
            alt="loading gif" 
            hidden={!this.state.isLoading}/>
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
