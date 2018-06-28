import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';

import { login } from '../redux/action'


class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token_state.tokenStat) {
      this.props.history.push('/garages')
    } else {
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div className="container-login">
        <div className="login">
          <div className="login-text">Login</div>
          <input placeholder="Username" onChange={(e) => this.setState({username:e.target.value})} />
          <input placeholder="Password" onChange={(e) => this.setState({password:e.target.value})}/>
          <a onClick={() => this.props.login_dispatch(this.state)} className="login-button">
            Login
          </a>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    token_state: state.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login_dispatch: (payload) => dispatch(login(payload))
  }
}

const Conn = connect(mapStateToProps, mapDispatchToProps)(Login)
export default Conn;
