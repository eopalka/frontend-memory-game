// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import { getGames } from './actions';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import ErrorPage from './components/Error';
import Instructions from './components/Instructions';
import Index from './components/Index';
import WholeGame from './components/WholeGame';
import Login from './components/Login';
import history from './history'
// DOMContentLoaded
class App extends Component {
  componentDidMount() {
    this.props.getGames();
  }

  render() {
    if (this.props.loading) {
      return (
        <h3>loading</h3>
      )
    }

    if (!this.props.user) {
      return (
        <Login />
      )
    }

  return (
    <Router history={ history }>
      <Navbar />
      <Switch> //allows for only one route to be rendered at a time
        <Route exact path="/" component={ Welcome } />
        <Route exact path="/instructions" component={ Instructions } />
        <Route exact path="/scoreboard" component={ Index } />
        <Route exact path="/game" component={ WholeGame } />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  );
}
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    user: state.user
  }
}

export default connect(mapStateToProps, { getGames })(App);

