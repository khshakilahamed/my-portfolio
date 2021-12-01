import React, { useEffect, useState } from 'react';
import autoX from '../../images/projects/autoX.jpg';
import worldTour from '../../images/projects/world_tour.jpg';
import silverGym from '../../images/projects/silver_gym.jpg';
import { Fade } from 'react-reveal';
import './Projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    console.log(projects);

    return (
        <div className="container" id="projects" style={{ height: '80vh' }}>
            <div className="my-5 py-4">
                <h2 className="text-center mt-5">My Works</h2>
                <p className="text-center mb-4">Check these out, Hope you will get a real idea about me.</p>
            </div>
            <Fade bottom>
                <section className="projects-container">
                    <div className="row">
                        {
                            projects.map(project => <div key={project.id} className="col-md-4 text-center ">
                                <div className="p-3">
                                    <div className="project-container">
                                        <img className="img-fluid w-100 project-img" src={project.shortImg} alt="" />
                                        <div className="project-content d-flex align-items-center justify-content-center">
                                            <div>
                                                <h4>{project.projectName}</h4>
                                                <a href={project.liveSite} target="_blank"><i className="fas fa-external-link-alt fa-2x m-4"></i></a>
                                                <a href={project.clientCode} target="_blank"><i class="fab fa-github fa-2x m-4"></i></a>
                                                <a href={project.serverCode} target="_blank"><i class="fas fa-server fa-2x m-4"></i></a>
                                                <p><a href="#">View Details</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                        {/* <div className="col-md-4 text-center ">
                            <div className="p-3">
                                <div className="project-container">
                                    <img className="img-fluid w-100 project-img" src={worldTour} alt="" />
                                    <div className="project-content d-flex align-items-center justify-content-center">
                                        <div>
                                            <h4>WorldTourBD- The Travel Agency</h4>
                                            <a href="https://world-tour-bd-work-11.web.app/" target="_blank"><i className="fas fa-external-link-alt fa-2x m-4"></i></a>
                                            <a href="https://github.com/khshakilahamed/world-tour-bd-work-11" target="_blank"><i class="fab fa-github fa-2x m-4"></i></a>
                                            <a href="https://github.com/khshakilahamed/world-tour-bd-work-11-server" target="_blank"><i class="fas fa-server fa-2x m-4"></i></a>
                                            <p><a href="#">View Details</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center ">
                            <div className="p-3">
                                <div className="project-container">
                                    <img className="img-fluid w-100 project-img" src={silverGym} alt="" />
                                    <div className="project-content d-flex align-items-center justify-content-center">
                                        <div>
                                            <h4>SilverGym- The Gym Website</h4>
                                            <a href="https://silver-bd-gym-assignment-10.web.app/" target="_blank"><i className="fas fa-external-link-alt fa-2x m-4"></i></a>
                                            <a href="https://github.com/khshakilahamed/silver-bd-gym-work-10" target="_blank"><i class="fab fa-github fa-2x m-4"></i></a>
                                            <p><a href="#">View Details</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </section>
            </Fade>
        </div>
    );
};

export default Projects;