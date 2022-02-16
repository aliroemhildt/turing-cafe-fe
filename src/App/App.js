import React, { Component } from 'react';
import Reservations from '../Components/Reservations/Reservations.js';
import Form from '../Components/Form/Form.js';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({reservations: data}))
  }

  addReservation = (newRes) => {
    this.setState({reservations: [...this.state.reservations, newRes]});
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
