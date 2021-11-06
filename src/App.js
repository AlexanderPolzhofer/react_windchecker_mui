import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Spotlist from './components/Spotlist';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spots: []
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Spotlist />
        <div>
          {this.state.spots.map((spot) => (
            <li key={spot.id}>{spot.name}</li>))}
        </div>


      </div >
    )
  }
}

export default App;
