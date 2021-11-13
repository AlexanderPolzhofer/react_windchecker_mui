import React, { Component } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import SlidebarStylesheet from "./Slidebar.module.css";

class Slidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                { url: "images/foto1.jpg" },
                { url: "images/foto2.jpg" },
                { url: "images/foto3.jpg" },
                { url: "images/foto4.jpg" },
                { url: "images/foto5.jpg" },
                { url: "images/foto6.jpg" },
                { url: "images/foto7.jpg" },
                { url: "images/foto8.jpg" },
                { url: "images/foto9.jpg" },
                { url: "images/foto10.jpg" },
                { url: "images/foto11.jpg" },
                { url: "images/foto12.jpg" }
            ]
        }
    }

    render() {
        return (<div className={SlidebarStylesheet.centerSlidebar}>
            <SimpleImageSlider
                width={896}
                height={504}
                images={this.state.images}
                showBullets={true}
                showNavs={true}
            />
        </div>);
    }
}

export default Slidebar;