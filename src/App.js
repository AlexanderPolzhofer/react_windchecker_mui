import { Component } from 'react';
import './App.css';
import IFrameWidget from './components/IFrameWidget';
import Navbar from './components/Navbar';
import Spotlist from './components/Spotlist';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isWeatherVisible: false,
      spots: [],
      widgets: []
    };
  }

  setWeatherVisible = () => {
    this.setState({ isWeatherVisible: true });
    this.checkVisibility();
  }

  createWidgetObject = () => {
    let widgets = this.state.widgets;
    let id = 1;
    widgets.push(<IFrameWidget url="https://wetter.orf.at/vorarlberg/" id={id} />);
    this.setState({ widgets: widgets });
  }

  checkVisibility = () => {
    if (this.state.isWeatherVisible === true) {
      this.createWidgetObject();
    }

  }

  deleteWidget = () => {
    let index = this.state.widgets.indexOf(1);
    if (index > 0) {
      index.splice(0);
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar weatherStatus={() => this.setWeatherVisible()} />
        <Spotlist />
        <h1>visible: {this.state.isWeatherVisible.toString()} </h1>
        {this.state.widgets.map((widget) => (
          <div key="1">{widget}</div>
        ))
        }
      </div>


    )
  }
}

export default App;
