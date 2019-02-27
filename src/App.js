import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import './App.css';
import Navbar from './Component/Navbar/navbar';
import Login from './Component/Login/Login';
import Admin from './Component/Admin/Admin';
import User from './Component/User/User';
import Registration from './Component/Register/Registration'
import { MsgBox } from './Component/Utility/MsgBox';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : null
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={ props =>{
      return (
        rest.user.hasOwnProperty('admin') && rest.user.adminAccess ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      )
    }
      
    }
  />
);

class App extends Component {
  
  render() {
    return (      
      <Router>
        <div className="App">
          <Navbar />
          <div>
            <AuthButton />
              <Route exact path="/login" component={Login}/>
              {/* <Route path="/admin" component={Admin}/> */}
              <PrivateRoute path="/admin" {...this.props} component={Admin} />
              <Route path='/user' component={User}/>
              <Route path='/register' component={Registration}/>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  "user" : state.user 
});

export default connect(mapStateToProps, null)(App);
