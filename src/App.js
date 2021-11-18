import { Component } from 'react';
import './App.css';
import IFrameWidget from './components/IFrameWidget';
import Navbar from './components/Navbar';
import Slidebar from './components/Slidebar';
import Spotlist from './components/Spotlist';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isWeatherVisible: false,
      isSpotlistVisible: false,
      isSlidebarVisible: false,
      spots: [],
      widgets: [],
      slidebar: []
    };
  }

  setWeatherVisible = () => {
    this.setState({ isWeatherVisible: true });
    this.createWidgetObject();
  }

  createWidgetObject = () => {
    let widgets = this.state.widgets;
    let id = 1;
    widgets.push(<IFrameWidget url="https://wetter.orf.at/vorarlberg/" id={id} />);
    this.setState({ widgets: widgets });
  }

  deleteWidget = () => {
    this.state.widgets.splice(0);
  }

  widgetDeleteCheck = () => {
    if (this.state.isWeatherVisible === true) {
      this.deleteWidget();
    }
  }

  setSpotlistVisible = () => {
    this.setState({ isSpotlistVisible: true });
    this.getSpotlist();
    
  }

  getSpotlist = () => {
    let spotsWithSpotlist = this.state.spots;
    spotsWithSpotlist.push(<Spotlist />);
    this.setState({ spots: spotsWithSpotlist });
  }

  deleteSpotlistCheck = () => {
    if (this.state.isSpotlistVisible === true) {
      this.delteSpotlist();
    }
  }

  delteSpotlist = () => {
    this.state.spots.splice(0);
  }

  keepSingleSpotlistOnScreen = () => {
    this.deleteSpotlistCheck();
  }

  keepSingleIFrameWidgetOnScreen = () => {
    this.widgetDeleteCheck();
  }

  /*<h1>visible: {this.state.isWeatherVisible.toString()} </h1>*/
  setSlidebarVisible = () => {
    this.setState({ isSlidebarVisible: true });
    this.getSlidebar();
  }

  getSlidebar = () => {
    let slidebar = this.state.slidebar;
    slidebar.push(<Slidebar />);
    this.setState({ slidebar: slidebar });
  }

  deleteSlidebar = () => {
    this.state.slidebar.splice(0);
  }

  keepSingleSlidebarOnScreen = () => {
    this.deleteSlidebar();
  }

  render() {
    return (
      <div className="App">
        <Navbar weatherStatus={() => this.setWeatherVisible()} getSpotlist={() => this.setSpotlistVisible()} getSlideshow={() => this.setSlidebarVisible()} />

        {this.state.widgets.map((widget) => (
          <div key="1" className="weatherORF">{widget}</div>
        ))
        }

        {this.state.spots.map((spotlist) => (
          <div key="2">{spotlist}</div>
        ))
        }

        {this.state.slidebar.map((slidebar) => (
          <div key="3">{slidebar}</div>
        ))
        }

        {this.keepSingleSpotlistOnScreen()}
        {this.keepSingleIFrameWidgetOnScreen()}
        {this.keepSingleSlidebarOnScreen()}

      </div>
    )
  }
}

export default App;
