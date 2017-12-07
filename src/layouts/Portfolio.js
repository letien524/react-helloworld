import React, {Component} from 'react';
import {projects} from '../data';
import {Link, Router} from 'react-router-dom';

export default class Portfolio extends Component {
    render() {
        const projectList = projects.map((project) =>(
            <div className="col-md-6 col-lg-4" key={project.id}>
                <a className="portfolio-item d-block mx-auto" href={"#portfolio-modal-" + project.id}>
                    <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                            <i className="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src={project.image} alt=""/>
                </a>
                <div className="portfolio-modal mfp-hide" id={"portfolio-modal-" + project.id}>
                    <div className="portfolio-modal-dialog bg-white">
                        <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                            <i className="fa fa-3x fa-times"></i>
                        </a>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <h2 className="text-secondary text-uppercase mb-0">{project.name}</h2>
                                    <hr className="star-dark mb-5"/>
                                    <img className="img-fluid mb-5" src={project.image} alt="" />
                                    <p className="mb-5">{project.description}</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>
                                        Close Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            )




        );

        const ProjectDetail = projects.map((project) =>
            <div className="portfolio-modal mfp-hide" id={"portfolio-modal-" + project.id}>
                <div className="portfolio-modal-dialog bg-white">
                    <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
                        <i className="fa fa-3x fa-times"></i>
                    </a>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="text-secondary text-uppercase mb-0">{project.name}</h2>
                                <hr className="star-dark mb-5"/>
                                <img className="img-fluid mb-5" src={project.image} alt="" />
                                    <p className="mb-5">{project.description}</p>
                                    <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                                        <i className="fa fa-close"></i>
                                        Close Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    return (
        <section className="portfolio" id="portfolio">

            <div className="container">
                <h2 className="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <hr className="star-dark mb-5"/>
                <div className="row">

                    {projectList}

                </div>
            </div>


        </section>
    );
    }
    }


