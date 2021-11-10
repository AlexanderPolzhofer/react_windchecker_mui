import { Component } from 'react';
import './App.css';
import IFrameWidget from './components/IFrameWidget';
import Navbar from './components/Navbar';
import Spotlist from './components/Spotlist';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      widgets: [{
        "widget":
          <IFrameWidget />
      }]
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar weather={this.state.widgets.widget}/>
        <Spotlist />

      </div>
    )
  }
}

export default App;
