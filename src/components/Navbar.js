import React from 'react';
import NavbarStyle from './Navbar.module.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className={NavbarStyle.navBar}>
            <h1>WINDCHECKER SPOTS</h1>
        </div>);
    }
}

export default Navbar;