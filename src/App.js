import { Component } from "react";
import './App.css';
import Button from '@mui/material/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button variant="contained">Hello</Button>
        </header>
      </div>
    );
  }
}

export default App;
