import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Robots: [],
      searchfield: ''
    }
  }

  async componentDidMount() {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await fetchData.json();
    this.setState({Robots: json});
  }

  onSearchChange = (evt) => {
    this.setState({ searchfield: evt.target.value });
  }

  render() {
    const { Robots, searchfield } = this.state;
    const filteredRobots = Robots.filter( Robot => Robot.name.toLowerCase().includes(searchfield.toLowerCase()) );
    return (!Robots.length) ?
    <h1 className="tc pa4">Loading</h1> :
    (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList Robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  } // Render
  
}

export default App;
