import React from 'react';
import NavbarStyle from './Navbar.module.css';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import CloudIcon from '@mui/icons-material/Cloud';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    urlORFWeather = () => {
        return "https://wetter.orf.at/vorarlberg/";
    }

    getAllSpots = () => {
        alert("clicked");
    }

    getWeatherFromORF = () => {
        <iframe title="titleORF" >{this.urlORFWeather}</iframe>
    }

    render() {
        return (<div className={NavbarStyle.navBar}>
            <FormatListNumberedIcon className={NavbarStyle.listIcon} onClick={() => { alert("clicked") }} />
            <h1>WINDCHECKER</h1>
            <div >
                <PhotoCameraIcon className={NavbarStyle.infoIcons} onClick={() => { alert("clicked") }} />
                <CloudIcon className={NavbarStyle.infoIcons} onClick={() => { alert("clicked") }} />
            </div>
        </div>);
    }
}

export default Navbar;