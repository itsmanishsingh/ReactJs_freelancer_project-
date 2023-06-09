import React from "react";
import diamond from "../assets/img/avataaars.svg";

function Masthead(){
    return (
        <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                {/* Here the image is fetched using props  */}
                <img className="masthead-avatar mb-5" src= {diamond} alt="..." />
                {/* <img className="masthead-avatar mb-5" src="../assets/img/avataaars.svg" alt="..." /> */}
                {/* <!-- Masthead Heading--> */}
                <h1 className="masthead-heading text-uppercase mb-0">Welcome to my site</h1>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Masthead Subheading--> */}
                <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </header>
    )
}

export default Masthead;