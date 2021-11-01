import React, { Component } from "react";

class SpotFetch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spots: []
        }
    }

    addSpot = () => {
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
                    this.addSpot()
                    console.log(element.name)
                    console.log(this.state.spots)
                });
            })
            .catch(error => alert('error', error));

    }

    render() {
        return (<div>
            <p>spots</p>
            <ul>
                <li>{this.state.spots}</li>
            </ul>

        </div>);
    }

}

export default SpotFetch;