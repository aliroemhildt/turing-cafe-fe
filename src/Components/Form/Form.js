import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  submitReservation = (e) => {
    e.preventDefault();
    this.props.addReservation({
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    });
    this.clearInputs();
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={(e) => this.handleChange(e)}
        />
        <input
          type='text'
          placeholder='Number of guests'
          name='number'
          value={this.state.number}
          onChange={(e) => this.handleChange(e)}
        />
        <button
          onClick={(e) => this.submitReservation(e)}
        >
          Make Reservation
        </button>
      </form>
    )
  }
}

export default Form;
