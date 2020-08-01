import React, { Component } from 'react';
import { Media, Progress, Card, CardHeader, CardTitle, CardBody, CardText, CardSubtitle, Button } from 'reactstrap';
import Footer from './FooterComponent';
import { NavLink } from 'react-router-dom';


const img = '/assets/images/vaibh.png';

function RenderSkill({ skills }) {

    const renderskill = skills.map((skill) => {
        return (
            <ul className="list-unstyled" key={skill.id}>
                <li className="skill-name">{skill.name}</li>
                <li><Progress color="secondary" value={skill.percent} /></li>
            </ul>
        );
    });
    return (
        <>
            {renderskill}
        </>
    );
}

function Aboutme(props) {
    return (
        <section id="about-me">
            <section className="site-section">
                <div className="container">
                    <div className="row pt-5 align-items-center">
                        <div className=" col-12 col-md-6 pr-lg-5 mb-5 mb-lg-0">
                            <Media >
                                <Media left middle>
                                    <Media height="670px" width="400px" object src={img} alt="vaibhav sinha" className="img-fluid thumbnail d-flex" />
                                </Media>
                            </Media>
                        </div>
                        <div className=" col-12 col-md-6 pl-lg-0">
                            <div className="section-heading">
                                <h2>About <strong>Me</strong></h2>
                            </div>

                            <p className="bio">I am a highly motivated and enthusiatic indvidual. A fast learner and always inclined to learn new technologies.</p>

                            <p className="pt-4 mt-0">
                                <NavLink to='/contact'><Button className="btn btn-primary px-4 py-2 mr-1 btn-sm smoothscroll">Contact Me</Button></NavLink>
                                <a href="#" className="btn btn-secondary px-4 py-2 btn-sm">Download CV</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5 section-heading">
                            <h2>Education</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="800">
                            <Card className="education mb-4">
                                <span className="date"><span className="fa fa-calendar"></span> August 2017 - Present</span>
                                <CardTitle className="course">Bachelors of Technology (Information Technology)</CardTitle>
                                <CardText>
                                    <p>CGPA - 8.3</p>
                                    <CardSubtitle className="school"><p>Maharaja Agrasen Intitute of Technology <br /> GGSIPU</p></CardSubtitle>
                                    <p className="city">Rohini, New Delhi</p>
                                </CardText>
                            </Card>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-12 col-md-6" data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="800">
                            <Card className="education mb-4">
                                <span className="date"><span className="fa fa-calendar"></span> April 2016 - April-2017</span>
                                <CardTitle className="course">Senior Secondary</CardTitle>
                                <CardText>
                                    <p>Percent- 93%</p>
                                    <CardSubtitle><p>Gurukul Academy</p></CardSubtitle>
                                    <CardText><p>Lucknow, UP</p></CardText>
                                </CardText>
                            </Card>
                        </div>
                    </div>

                    <div className="row">
                        <div className=" col-12 col-md-6" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="800">
                            <Card className="education mb-5">
                                <span className="date"><span className="fa fa-calendar"></span> April 2014 - April 2015</span>
                                <CardTitle className="course">Secondary</CardTitle>
                                <CardText>
                                    <p>CGPA - 8.3</p>
                                    <CardSubtitle><p>Maharaja Agrasen Intitute of Technology <br /> GGSIPU</p></CardSubtitle>
                                    <CardText><p>Rohini, New Delhi</p></CardText>
                                </CardText>
                            </Card>
                        </div>
                    </div> /*

                    <div className="row mt-5 skills-section" data-aos="zoom-in" data-aos-duration="800">
                        <div className="col-12" >
                            <div className="section-heading ">
                                <h2 className=" pb-5">My <strong>SKILLS</strong></h2>
                            </div>
                            <div className="skills">
                                <RenderSkill skills={props.skills} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                <Footer />
            </div>
            </section>
        </section>
    );

}


export default Aboutme;