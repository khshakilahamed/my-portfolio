import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

const ProjectDetails = () => {
    const [project, setProject] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const matchedProject = data.find(project => project.id == id)
                setProject(matchedProject);
            })
    }, [id]);

    console.log(project)

    return (
        <div>
            <NavBar></NavBar>
            <div className="container py-5">
                <div className="my-5">
                    <hr />
                    <h2 className="text-center my-4" style={{ color: 'rgb(43, 43, 43)' }}>{project.projectName}</h2>
                    <hr />
                    <div className="row shadow py-3">
                        <div className="col-md-4 text-center">
                            <div className="shadow">
                                <img className="img-fluid" style={{ width: '90vh' }} src={project?.imgDetails1?.img} />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div className="ps-5" >
                                <div className="p-5 shadow text-light rounded" style={{ background: "rgb(43, 43, 43)" }}>
                                    {
                                        project?.imgDetails1?.details.map(detail => <div>
                                            <ul>
                                                <p><i class="far fa-hand-point-right me-3"></i> {detail}</p>
                                            </ul>
                                        </div>)
                                    }
                                    <a href={project.liveSite} target="_blank"><i className="fas fa-external-link-alt fa-2x m-4"></i></a>
                                    <a href={project.clientCode} target="_blank"><i class="fab fa-github fa-2x m-4"></i></a>
                                    {
                                        project?.serverCode && <a href={project.serverCode} target="_blank"><i class="fas fa-server fa-2x m-4"></i></a>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-5">
                        <div className="row shadow py-3">
                            <div className="col-md-6 d-flex align-items-center justify-content-center">
                                <div className="ps-5" >
                                    <div className="p-5 shadow text-light rounded" style={{ background: "rgb(43, 43, 43)" }}>
                                        {
                                            project?.imgDetails2?.details.map(detail => <div>
                                                <ul>
                                                    <p><i class="far fa-hand-point-right me-3"></i> {detail}</p>
                                                </ul>
                                            </div>)
                                        }
                                        <a href={project.liveSite} target="_blank"><i className="fas fa-external-link-alt fa-2x m-4"></i></a>
                                        <a href={project.clientCode} target="_blank"><i class="fab fa-github fa-2x m-4"></i></a>
                                        {
                                            project?.serverCode && <a href={project.serverCode} target="_blank"><i class="fas fa-server fa-2x m-4"></i></a>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="shadow">
                                    <img className="img-fluid" style={{ width: '90vh' }} src={project?.imgDetails2?.img} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-5">
                        <div className="row shadow py-3">
                            <div className="col-md-4 text-center">
                                <div className="shadow">
                                    <img className="img-fluid" style={{ width: '90vh' }} src={project?.imgDetails3?.img} />
                                </div>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-center">
                                <div className="shadow">
                                    <div className="ps-5 p-5 text-light rounded" style={{ background: "rgb(43, 43, 43)" }}>
                                        {
                                            project?.imgDetails3?.details.map(detail => <div>
                                                <ul>
                                                    <p><i class="far fa-hand-point-right me-3"></i> {detail}</p>
                                                </ul>
                                            </div>)
                                        }
                                        <a href={project.liveSite} target="_blank"><i className="fas fa-external-link-alt fa-2x m-4"></i></a>
                                        <a href={project.clientCode} target="_blank"><i class="fab fa-github fa-2x m-4"></i></a>
                                        {
                                            project?.serverCode && <a href={project.serverCode} target="_blank"><i class="fas fa-server fa-2x m-4"></i></a>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;