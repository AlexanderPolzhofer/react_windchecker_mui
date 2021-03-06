import React from 'react';

class Spotlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spots: []
        };
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

        fetch(getSpotsUrl, requestOptions)
            .then(response => response.json())
            .then(jsonData => {
                this.setState({ spots: jsonData.data })
            })
            .catch(error => alert('error', error));
    }

    render() {
        return (<div>
            <ul>
                {this.state.spots.map((spot) => (
                    <li key={spot.id}>{spot.name}</li>
                ))
                }
            </ul >
        </div >);
    }
}

export default Spotlist;