import { Component } from "react";
import './App.css';
import SpotFetch from "./components/SpotFetch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
      
          <SpotFetch />
       
      </div>
    );
  }
}

export default App;
