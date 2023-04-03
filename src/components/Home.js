import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import NewCounter from './NewCounter';

export default function Home() {
    return (
        <>
            <Navbar/>
            <Carousel fade style={{marginTop:'85px'}} data-aos="fade-up">
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img4.png'}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img3.png'}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img5.png'}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img6.png'}
                    alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img7.png'}
                    alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img8.png'}
                    alt="Sixth slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img9.png'}
                    alt="Seventh slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img10.png'}
                    alt="Eighth slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img11.png'}
                    alt="Nineth slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img12.jpg'}
                    alt="Tenth slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img13.png'}
                    alt="Eleventh slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img14.jpeg'}
                    alt="Twelth slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/Images/HomeSlider/img15.png'}
                    alt="Thirteen slide"
                    />
                </Carousel.Item>
            </Carousel>
            {/* Message From HOD Section */}
            <section id="advanced-features">
                <div className="features-row section-bg" data-aos="fade-up">
                    <div className="container">
                        <div className="col-12">
                            <img className="advanced-feature-img-right wow fadeInRight" src={process.env.PUBLIC_URL + '/Images/Faculty/Chem_Hod.jpeg'} alt=""/>
                            <div>
                                <h1>Message From the Head of Department</h1>
                                <h3>Pradip Kumar Tewari, Jal Jeevan Mission Professor Chair and Head, Department of Chemical Engineering</h3>
                                <p>The vision of the Department is to become a globally recognized hub of Chemical Engineering through its contribution in emerging and demand driven areas with a multidisciplinary approach. ‘Digitalisation, Decarbonisation
                                and Decentralisation’ (3Ds) is the future of Chemical Engineering. Translation of molecular information into the discovery of new products and processes will play an important role.</p>
                                <h3><span style={{fontWeight:'bold'}}>DEPARTMENT IS KEEN ON COLLABORATION WITH INDUSTRIES, R&D ORGANISATIONS AND ACADEMIA WORLD-WIDE</span></h3>
                                <p>At present, Chemical Engineering Department is sharing its expertise with Department of Drinking Water and Sanitation (DDWS), Ministry of Jal Shakti, Defence Research and Development Organisation (DRDO), Ministry of Defence, Public Health Engineering Department (PHED) etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Message From HOD Section */}
            {/* <!-- ======= COUNTER Section ======= --> */}
            <section id="counter" className="counter section-with-bg">
                <div className="container">
                    <div className="row counters" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="100" data-purecounter-duration="1" className="purecounter"></span>
                            <p>PG Students</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="200" data-purecounter-duration="1" className="purecounter"></span>
                            <p>UG Students</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="14" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Faculty Members</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <span data-purecounter-start="0" data-purecounter-end="2" data-purecounter-duration="1" className="purecounter"></span>
                            <p>Staff Members</p>
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <NewCounter />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End COUNTER Section --> */}
            {/* <!-- ======= Research Section ======= --> */}
            <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Research Areas</h2>
                    </div>
                    <div className="row gy-5">
                        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="service-item">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Research/services-1.jpg'} className="img-fluid" alt="ReactionEngineering"/>
                                </div>
                                <div className="details position-relative">
                                    <div className="icon">
                                        <i className="bi bi-activity"></i>
                                    </div>
                                    <Link aria-current="page" to="/researchArea" className="stretched-link">
                                    <h3>REACTION ENGINEERING</h3>
                                    </Link>
                                    <p>Reaction engineering is a field of study that focuses on the design and optimization of chemical and biochemical reactions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                            <div className="service-item">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Research/services-2.jpg'} className="img-fluid" alt="MassTransfer"/>
                                </div>
                                <div className="details position-relative">
                                    <div className="icon">
                                        <i className="bi bi-broadcast"></i>
                                    </div>
                                    <Link aria-current="page" to="/researchArea" className="stretched-link">
                                    <h3>MASS TRANSFER</h3>
                                    </Link>
                                    <p>Mass transfer is a field of study that encompasses the movement of mass from one phase to another. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                            <div className="service-item">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Research/services-3.jpg'} className="img-fluid" alt="DesignEngineering"/>
                                </div>
                                <div className="details position-relative">
                                    <div className="icon">
                                        <i className="bi bi-easel"></i>
                                    </div>
                                    <Link aria-current="page" to="/researchArea" className="stretched-link">
                                    <h3>DESIGN ENGINEERING</h3>
                                    </Link>
                                    <p>Design is a field of study that involves the creation and optimization of chemical processes and equipments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
                            <div className="service-item">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Research/services-4.jpg'} className="img-fluid" alt="ProcessControl"/>
                                </div>
                                <div className="details position-relative">
                                    <div className="icon">
                                        <i className="bi bi-bounding-box-circles"></i>
                                    </div>
                                    <Link aria-current="page" to="/researchArea" className="stretched-link">
                                    <h3>PROCESS CONTROL</h3>
                                    </Link>
                                    <p>Process control is a field of study that involves the design, implementation, and optimization of control systems </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
                            <div className="service-item">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Research/services-5.jpg'} className="img-fluid" alt="HeatTransfer"/>
                                </div>
                                <div className="details position-relative">
                                    <div className="icon">
                                        <i className="bi bi-calendar4-week"></i>
                                    </div>
                                    <Link aria-current="page" to="/researchArea" className="stretched-link">
                                    <h3>HEAT TRANSFER</h3>
                                    </Link>
                                    <p>Heat transfer is a fundamental aspect of chemical engineering, as it plays a critical role in various industrial processes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="700">
                            <div className="service-item">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Research/services-6.jpg'} className="img-fluid" alt="FluidMechanics"/>
                                </div>
                                <div className="details position-relative">
                                    <div className="icon">
                                        <i className="bi bi-chat-square-text"></i>
                                    </div>
                                        <Link aria-current="page" to="/researchArea" className="stretched-link">
                                        <h3>FLUID MECHANICS</h3>
                                        </Link>
                                        <p>Fluid mechanics is a fundamental area of study in chemical engineering that focuses on the behavior of fluids.</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Services Section --> */}
            {/* <section id="services" className="services">
                <div className="container" data-aos="fade-up">
                    <div className="row gy-5">
                        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="service-item">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Research/services-1.jpg'} className="img-fluid" alt="ReactionEngineering"/>
                                </div>
                                <div className="details position-relative">
                                    <div className="icon">
                                        <i className="bi bi-activity"></i>
                                    </div>
                                    <Link aria-current="page" to="/researchArea" className="stretched-link">
                                    <h3>REACTION ENGINEERING</h3>
                                    </Link>
                                    <p>Reaction engineering is a field of study that focuses on the design and optimization of chemical and biochemical reactions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="service-item">
                                <div className="img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Research/services-1.jpg'} className="img-fluid" alt="ReactionEngineering"/>
                                </div>
                                <div className="details position-relative">
                                    <div className="icon">
                                        <i className="bi bi-activity"></i>
                                    </div>
                                    <Link aria-current="page" to="/researchArea" className="stretched-link">
                                    <h3>REACTION ENGINEERING</h3>
                                    </Link>
                                    <p>Reaction engineering is a field of study that focuses on the design and optimization of chemical and biochemical reactions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                            <div className="service-item">
                                <div className="details position-relative">
                                    <h3>NEWS AND NEWSLETTER</h3>
                                    <li><Link aria-current="page" to="/pgAcads">Rolling advertisement for Admission to Ph.D. Programmes</Link></li>
                                    <p>Reaction engineering is a field of study that focuses on the design and optimization of chemical and biochemical reactions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Sponsors and Recruiters Sections */}
            <section id="supporters" className="section-with-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Sponsors and Recruiters</h2>
                    </div>
                    <div className="row no-gutters supporters-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/DST.jpeg'} className="img-fluid" alt="DST"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo" style={{border:'1px solid #e0e5fa'}}>
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/iocl.jpeg'} className="img-fluid" alt="IOCL"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/rspcb.jpeg'} className="img-fluid" alt="RSPCB"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/serb.png'} className="img-fluid" alt="SERB"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/alogoAi.png'} className="img-fluid" alt="ALOGOAI"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/bakerHughes.png'} className="img-fluid" alt="BH"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/eeki.jpeg'} className="img-fluid" alt="EEKI"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/nrl.jpeg'} className="img-fluid" alt="NRL"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Sponsors Section --> */}
        </>
    )
}
