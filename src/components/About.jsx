import React from "react";
import "./About.css";

function About() {
    return (
        <>
            <div className="container py-3">
                <h1 className="text-center mt-4">ABOUT US</h1>
                <p className="text-center text-primary mt-5">
                    <i className="fa-brands fa-digg fa-3x"></i>
                </p>
            </div>
            <div className="container-fluid bg-image">
                <div className="enquire-con">
                    <button className="enquire btn btn-primary">Enquire Now
                    </button>
                </div>
            </div>

            <div className="container-fluild backdrop">
                <div className="container px-5">
                    <p className=" pt-5 pb-5 px-5 text-center fs-2 fw-bold fst-italic">
                        We endeavour to build homes which make it's residents happy and proud of their address. Residents are at heart of everything we do, we build homes to live in, not houses to stay in.
                    </p>

                    <div className="row pt-5 pb-4 px-5">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card shadow pb-5">
                                <div className="card-body">

                                    <i className="text-primary m-5 fa-solid fa-clock fa-8x"></i>

                                    <p className="card-text fs-5 fw-light mb-1">Our track record has been impeccable with <b>project completion on time</b> and have surpassed expectations may a time, society members have positively received our redevelopment plans and encourage our <b>modern and urbane designs</b> to their neighbours.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card shadow pb-5">
                                <div className="card-body">
                                    <i className="text-primary m-5 fa-solid fa-star fa-8x"></i>
                                    <p className="card-text fs-5 fw-light mb-3 pb-5">The Hetali group is a redeveloper like no other with a <b>profound focus on quality</b> and <b>long term satisfaction of its residents</b>.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row px-5">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card shadow pb-5">
                                <div className="card-body">

                                    <i className="text-primary m-5 fa-solid fa-handshake fa-8x"></i>
                                    <p className="card-text fs-5 fw-light pb-5">They don't just endeavour but build homes which make it's residents proud of their address <b>by putting home-owners at the heart and soul of everything</b> they do from start to finish and post completion.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="card shadow pb-5">
                                <div className="card-body pb-5">

                                    <i className="text-primary m-5 fa-solid fa-house-chimney fa-8x"></i>
                                    <p className="card-text fs-5 fw-light mb-5 pb-4">Hetali group lives by the ethos of <b>building homes to live and not houses to stay in</b>.</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-center text-primary mt-5">
                            <i className="fa-brands fa-digg fa-3x"></i>
                        </p>

                    </div>
                </div>
            </div>


            <div className="container-fluid second-sec py-5 p-0">
                <div className="container-fluid bg-color">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center text-white pt-4 pb-3">VISION</h2>
                            <p className="text-white text-center fs-2 fw-bold fst-italic pb-4">We aim to ensure top class services to our stakeholders & diversify our business to other service-oriented sectors with the ultimate goal of achieving customer satisfaction & end-user interaction.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid pb-5">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center pt-5">MISSION</h2>
                        <p className="text-center text-primary mt-3 pb-3">
                            <i className="fa-brands fa-digg fa-3x"></i>
                        </p>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img className="gift rounded-3 shadow-sm" src="/img/gift.jpg" alt="gift" />
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">

                            <div className="accordion accordion-flush" id="accordionFlushExample">
                                <div className="accordion-item mb-2 shadow-sm">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="bg-light text-secondary accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            <b>Personalised</b>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="bg-light accordion-body fs-4">
                                            Our core ideaology is to provide Personalised homes to meet the very specific needs of residents.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-2 shadow-sm">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button bg-light text-secondary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <b>Committed</b>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Our core ideaology is to provide Personalised homes to meet the very specific needs of residents.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-2 shadow-sm">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button bg-light text-secondary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            <b>Quality & Service Oriented</b>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Our core ideaology is to provide Personalised homes to meet the very specific needs of residents.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mb-2 shadow-sm">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button bg-light text-secondary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            <b>Timely</b>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Our core ideaology is to provide Personalised homes to meet the very specific needs of residents.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;