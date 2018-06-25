import React, { Component } from 'react';
import { connect } from 'react-redux'

import { insertGarage } from '../redux/action'

import '../App.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      address: "",
      phone_number: "",
      email: "",
      max_car: "",
      modal: "none"
    }
  }

  form () {
    this.props.insertGarage_dispatch(this.state)
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({modal:'block'})} id="myBtn">Open Modal</button>
        <div style={{display: `${this.state.modal}`}} id="myModal" class="modal">
          <div className="modal-content">
            <a onClick={() => this.setState({modal:'none'})} class="close">&times;</a>
            <p></p>
            <div className="form-container">
              <div>Input Garage</div>
              <div className="input">
                <input onChange={(e) => this.setState({name:e.target.value})} placeholder="Name"/>
                <input onChange={(e) => this.setState({address:e.target.value})} placeholder="Address" />
                <input onChange={(e) => this.setState({phone_number:e.target.value})} placeholder="Phone Number" />
                <input onChange={(e) => this.setState({email:e.target.value})} placeholder="Email" />
                <input onChange={(e) => this.setState({max_car:e.target.value})} placeholder="Maximal Car" />
                <a onClick={() => this.form()} className="button-insert" type="button">Submit</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    insertGarage_dispatch: (payload) => dispatch(insertGarage(payload))
  }
}

const Conn = connect(null, mapDispatchToProps)(Form)
export default Conn;