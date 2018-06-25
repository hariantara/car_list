import React, { Component } from 'react';
import { connect } from 'react-redux'

import { cars } from '../redux/action'

import FormCar from './form-car.js'

class Car extends Component {
  componentDidMount () {
    if (this.props.carList_state.length === 0) {
      this.props.carsList_dispatch(this.props.match.params.id)
    }
  }
  render() {
    return (
      <div className="garage-container">
        <div>
          <FormCar id_garage={this.props.match.params.id}/>
        </div>
        {
          this.props.carList_state.map(e => {
            return (
              <div className="container-item">
                <div className="item">
                  <div className= "garage name">
                    {e.brand}
                  </div>
                  <div className="garage">
                    {e.model}
                  </div>
                  <div className="garage">
                    {e.year}
                  </div>
                  <div className="garage">
                    {e.color}
                  </div>
                  <div className="garage">
                    {e.mileage}
                  </div>
                  <div className="garage">
                    {e.engine}
                  </div>
                  <div className="garage">
                    {e.power}
                  </div>
                  <div className="garage">
                    {e.regis_date}
                  </div>
                  <div className="garage">
                    {e.price}
                  </div>
                </div>
                <div className="content-opsi">
                  <a className="opsi edit">Edit</a>
                  <a className="opsi hapus">Hapus</a>
                </div>
              </div>
            )
          })


        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    carList_state: state.car
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    carsList_dispatch: (payload) => dispatch(cars(payload))
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Car)
export default Conn;
