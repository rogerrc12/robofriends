import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// Redux
import { connect } from 'react-redux';
import { setSearchField, setRequestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField : state.searchRobots.searchField,
    isPending   : state.requestRobots.isPending,
    robots      : state.requestRobots.robots,
    error       : state.requestRobots.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => setRequestRobots(dispatch)
  }
}

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.onRequestRobots();
  }

  onSearchChange = (evt) => {
    this.setState({ searchfield: evt.target.value });
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter( robot => robot.name.toLowerCase().includes(searchField.toLowerCase()) );
    return isPending ?
    <h1 className="tc pa4">Loading</h1> :
    (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList Robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  } // Render
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
