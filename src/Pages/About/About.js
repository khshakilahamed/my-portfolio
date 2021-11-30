import React from 'react';
import './About.css';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import myImage from '../../images/my-image.jpg'

const About = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="about-container">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-4">
                            <img className="img-fluid w-100" src={myImage} alt="" />
                        </div>
                        <div className="col-md-8">
                            <p>Hello,<br /> I am kh. shakil studying at Daffodil International University, Department of <em><strong>Computer Science and Engineering (CSE)</strong></em>. I have completed my SSC in 2014 from <em><strong>Dighulia Shahid Mizanur Rahman School, Tangail</strong></em>. I have also completed my HSC in 2016 from <em><strong>Sristy College of Tangail, Tangail</strong></em>. </p>
                            <p>I am a junior web developer. As a junior web developer I have learned some technologies like HTML, CSS, Javascript, ReactJS, NodeJS, ExpressJS, MongoDB, and so on.</p>
                            <p>I have some basic knowledge on- C programming, Python and Java. </p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;