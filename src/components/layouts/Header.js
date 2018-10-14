/**
 * Created by Hugh on 10/12/2018.
 */
import { Link } from "react-router-dom";

import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);

        this.w3_open = this.w3_open.bind(this);
        this.w3_close = this.w3_close.bind(this);
    }

    w3_open() {
        var x = document.getElementById("mySidebar");
        x.style.width = "100%";
        x.style.fontSize = "30px";
        x.style.paddingTop = "10%";
        x.style.display = "block";
    }
    w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }

    render() {
        return (
            <div>
                    <nav className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{display:'none'}} id="mySidebar">
                        <h1 className="w3-xxxlarge w3-text-theme">Side Navigation</h1>
                        <button className="w3-bar-item w3-button" onClick={this.w3_close}>Close <i className="fa fa-remove"></i></button>
                        <Link className="w3-bar-item w3-button" to="/about" onClick={this.w3_close}>About</Link>
                        <Link className="w3-bar-item w3-button" to="/postform" onClick={this.w3_close}>Post</Link>
                        <Link className="w3-bar-item w3-button" to="/allposts" onClick={this.w3_close}>All Posts</Link>
                    </nav>

                    <header className="w3-container w3-theme w3-padding" id="myHeader">
                        <i onClick={this.w3_open} className="fa fa-bars w3-xlarge w3-button w3-theme" style={{position: 'fixed', left: '0px'}} ></i>
                        <div className="w3-center">
                            <h4>BEAUTIFUL RESPONSIVE WEB SITES</h4>
                            <h1 className="w3-xxxlarge w3-animate-bottom">BUILT WITH W3.CSS</h1>
                        </div>
                    </header>

            </div>
        );
    }
}

export default Header;