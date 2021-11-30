import React from 'react';
import './About.css';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import myImage from '../../images/my-image.jpg'
import { Fade } from 'react-reveal';

const About = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="about-container" style={{ height: '100vh' }}>
                <div className="container">
                    <div className="row py-5">
                        <Fade left>
                            <div className="col-md-4">
                                <img className="img-fluid w-100" src={myImage} alt="" />
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-md-8">
                                <p>Hello,<br /> I am kh. shakil studying at Daffodil International University, Department of <em><strong>Computer Science and Engineering (CSE)</strong></em>. I have completed my SSC in 2014 from <em><strong>Dighulia Shahid Mizanur Rahman School, Tangail</strong></em>. I have also completed my HSC in 2016 from <em><strong>Sristy College of Tangail, Tangail</strong></em>. </p>
                                <p>I am a junior web developer. As a junior web developer I have learned some technologies like HTML, CSS, Javascript, ReactJS, NodeJS, ExpressJS, MongoDB, and so on.</p>
                                <p>I have some basic knowledge on- C programming, Python and Java. </p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;