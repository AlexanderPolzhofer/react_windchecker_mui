import React from 'react';
import NavbarStyle from './Navbar.module.css';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import CloudIcon from '@mui/icons-material/Cloud';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import HomeIcon from '@mui/icons-material/Home';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getAllSpotsInAPP = () => {
        this.props.getSpotlist();
    }

    getWeatherStatusFromNavbar = () => {
        this.props.weatherStatus();
    }

    connectingWithHomeIcon = () => {
        this.props.getSlideshow();
    }

    render() {
        return (<div className={NavbarStyle.navBar}>
            <HomeIcon className={NavbarStyle.homeIcon} onClick={this.connectingWithHomeIcon} />
            <h1>WINDCHECKER</h1>
            <div >
                <FormatListNumberedIcon className={NavbarStyle.infoIcons} onClick={this.getAllSpotsInAPP} />
                <PhotoCameraIcon className={NavbarStyle.infoIcons} onClick={() => { alert("clicked photo icon") }} />
                <CloudIcon className={NavbarStyle.infoIcons} onClick={this.getWeatherStatusFromNavbar} />
            </div>
        </div>);
    }
}

export default Navbar;