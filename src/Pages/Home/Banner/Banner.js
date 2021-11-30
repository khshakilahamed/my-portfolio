import React from 'react';
import Typical from 'react-typical'
import banner from '../../../images/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center ">
                        <div className="banner-titles">
                            <p >Welcome to My World</p>
                            <h1 className="name-title">Hi, I'm <span style={{ color: '#B03A2E' }}>Kh. Shakil</span> </h1>
                            <h1>
                                <Typical
                                    steps={['a Web Developer.', 1000, 'a MERN Stack Web Developer.', 1000, 'a Coder.', 1000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </h1>
                            <a
                                href="https://drive.google.com/uc?export=download&id=18kDb3chZGnPfPSe33WBddG448PXH2sEV"
                                download>
                                <button className="btn btn-dark">Download Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img className="img-fluid" src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;