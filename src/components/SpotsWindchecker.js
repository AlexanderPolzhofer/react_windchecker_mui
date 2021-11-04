import React, { Component } from "react";

class SpotsWindchecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spots: []
    }
  }

  /* addSpot = () => {
       let spot = {
           id: 1,
           name: "Vorarlberg"
       }
 
       let spots = this.state.spots;
       spots.push(spot);
       this.setState({
           spots: spots
       })
   }
 
   componentDidMount() {
 
       var requestOptions = {
           method: 'GET',
           redirect: 'follow',
           headers: {
               'Content-Type': 'application/json'
           }
       }
 
       fetch("https://api.riedmann.rocks/windchecker/items/spots", requestOptions,
       )
           .then(response => response.json())
           .then(function (data) {
               data.data.forEach(element => {
                   this.addSpot(element)
                   console.log(element.name)
                   console.log(this.state.spots)
               });
           })
           .catch(error => alert('error', error));
 
   }*/

  //url Spots am Bodensee: https://api.riedmann.rocks/windchecker/items/item?filter[spots][eq]=1


  render() {
    return (<div>
      <p>spots</p>
      <ul>
        <li>{this.state.spots}</li>
      </ul>

    </div>);
  }

}

export default SpotsWindchecker;


/**
 * constructor(props) {
    super(props);
    this.state = {
      spots: []
    }
  }

  addingSpot = (element) => {
    let spot = {
      id: element.id,
      name: element.name
    }

    let spots = this.state.spots;
    spots.push(spot);
    this.setState({
      spots: spots
    })
  }

  //GET windchecker spots
  componentDidMount() {

    var requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    var getSpotsUrl = "https://api.riedmann.rocks/windchecker/items/spots";

    fetch(getSpotsUrl, requestOptions,
    )
      .then(response => response.json())
      .then(function (data) {

        data.data.forEach(element => {
          this.addingSpot(element)
          console.log(element.name)
        });
      })
      .catch(error => alert('error', error));

  }

  render() {
    return (
      <div className="App">
        <h1>WINDCHECKER SPOTS</h1>
        <p>
          {this.state.spots}

        </p>

      </div>
    );
  }
 */

//async fetch
/*
constructor(props) {
  super(props);
  this.state = {
    loading: true,
    spot: null
  }
}

async componentDidMount() {
  const urlGetSpots = "https://api.riedmann.rocks/windchecker/items/spots";
  const response = await fetch(urlGetSpots);
  const data = await response.json();
  this.setState({ spot: data.data[0], loading: false })



  console.log(data);
}


render() {
  return (
    <div className="App">
      <h1>WINDCHECKER SPOTS</h1>
      <div>
        <ul>
          <li>{this.state.loading ? <div>loading ...</div> : <div><div>{this.state.spot.name}</div></div>}</li>
        </ul>
      </div>
    </div>
  )
}
}

*/

/*
        var arraySpot = [];
        jsonData.data.forEach(element => {
          let spot = {
            id: element.id,
            name: element.name
          }
          //spot Objekt wird erstellt und ausgegeben
          console.log(spot)
          arraySpot.push(spot)
        });
        const arraylist = arraySpot
*/