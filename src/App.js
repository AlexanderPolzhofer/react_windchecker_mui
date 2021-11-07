import { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
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
          <div>
            {this.state.spots.map((spot) => (
              <li key={spot.id}>{spot.name}</li>))}
          </div>

          <div className="weatherORF">
            <iframe title="weatherORF" src="https://wetter.orf.at/vorarlberg/" width="75%" height="75%"></iframe>
          </div>

        </div>
        <Footer />

      </div>
    )
  }
}

export default App;
