import React from 'react'
import Navbar from './Navbar'

export default function RegularFaculty() {
    return (
        <>
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Regular Faculty</h2>
                </div>
            </div>
            {/* <!-- ======= Team Section ======= --> */}
            <section className="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/Chem_Hod.jpeg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: pradiptewari@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/94300"><i className="bi bi-person-fill"></i></a>
                                        <a href="https://sites.google.com/iitj.ac.in/pradipktewari/home"><i class="fa-solid fa-house"></i></a>
                                        <a href="tel:+91-291-2801703"><i className="bi bi-phone-fill"></i></a>
                                        <a href="https://www.linkedin.com/in/pradip-k-tewari-497b546a/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Pradip K Tewari</h4>
                                    <span>Jal Jeevan Mission Professor Chair and Head of Department</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:Indian Institute of Technology Bombay</span></p>
                                    <p style={{textAlign:'justify'}}>Water Technologies; Membrane Technology; Desalination; Nanocomposite Membrane Technology; Heat Transfer and Two Phase Flow.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/abhilasham.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: abhilasham@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/229215"><i className="bi bi-person-fill"></i></a>
                                        <a href="https://sites.google.com/iitj.ac.in/abhilasham/home"><i class="fa-solid fa-house"></i></a>
                                        <a href="tel:+91-291-2801713"><i className="bi bi-phone-fill"></i></a>
                                        <a href="https://www.linkedin.com/in/dr-abhilasha-maheshwari-55406a7b/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Abhilasha Maheshwari</h4>
                                    <span>Assistant Professor</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:Indian Institute of Technology Bombay & Washington University</span></p>
                                    <p>Process Systems Engineering; Water Distribution Networks; Modelling; Optimization; Sustainability; Environmental Chemistry</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/Angan.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: angan@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/158541"><i className="bi bi-person-fill"></i></a>
                                        <a href="https://sites.google.com/iitj.ac.in/aces-laboratory/home"><i class="fa-solid fa-house"></i></a>
                                        <a href="tel:+91-291-2801706"><i className="bi bi-phone-fill"></i></a>
                                        <a href="https://www.linkedin.com/in/angan-sengupta-9750224a/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Angan Sengupta</h4>
                                    <span>Assistant Professor</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:Indian Institute of Technology Bombay</span></p>
                                    <p>Molecular Modelling & Simulation; Theoretical Material Design; Carbon dioxide Capture; Hydrogen Storage; Water Treatment; Fuel Cell; Thermodynamic Studies; Continuum Modelling & Simulation; Fire and Explosion Modelling; Steady and Transient State Modelling; Safety Modelling; Process Modelling; Transport Processes</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/deepakarora.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: deepakarora@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/120831"><i className="bi bi-person-fill"></i></a>
                                        <a href="https://deepakarora04.wixsite.com/website"><i class="fa-solid fa-house"></i></a>
                                        <a href="tel:+91-291-2801705"><i className="bi bi-phone-fill"></i></a>
                                        <a href="https://www.linkedin.com/in/deearo/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Deepak Arora</h4>
                                    <span>Associate Professor</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:University of Massachusetts Amherst</span></p>
                                    <p>Adhesion in electronic packaging and manufacture of high density interconnects; Polymer rheology; Polymer crystallization; Dielectrics for electronic packaging; Structure-process-property relationships for polymers and their composites</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/krunal.jpeg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: krunalg@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/354355"><i className="bi bi-person-fill"></i></a>
                                        <a href="https://krunalgangawane.wixsite.com/kmgangawane"><i class="fa-solid fa-house"></i></a>
                                        <a href="tel:+91-291-2801713"><i className="bi bi-phone-fill"></i></a>
                                        <a href="https://www.linkedin.com/in/dr-abhilasha-maheshwari-55406a7b/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Dr Krunal M. Gangawane</h4>
                                    <span>Assistant Professor</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:Indian Institute of Technology Roorkee</span></p>
                                    <p>CFD; Lattice Boltzmann method; Aerogels; Nanoparticles-based phase change material</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/nirmalya.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: nirmalya@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/196325"><i className="bi bi-person-fill"></i></a>
                                        <a href="http://home.iitj.ac.in/~nirmalya/"><i class="fa-solid fa-house"></i></a>
                                        <a href="tel:+91-291-2801711"><i className="bi bi-phone-fill"></i></a>
                                        <a href="https://www.linkedin.com/in/nirmalya-bachhar-219173b/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Nirmalya Bachhar</h4>
                                    <span>Assistant Professor</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:Indian Institute of Technology Bombay</span></p>
                                    <p>Nanomaterials; polymer nanocomposite; self-assembly</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/psarkar.png'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: psarkar@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/170899"><i className="bi bi-person-fill"></i></a>
                                        <a href="https://sites.google.com/iitj.ac.in/biomolecular-engineering-group/home"><i class="fa-solid fa-house"></i></a>
                                        <a href="tel:+91-291-2801707"><i className="bi bi-phone-fill"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Prasenjit Sarkar</h4>
                                    <span>Assistant Professor</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:North Carolina State University</span></p>
                                    <p>Biomolecular Engineering; Biochemical Engineering</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/guptapk.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: guptapk@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/196171"><i className="bi bi-person-fill"></i></a>
                                        <a href="http://home.iitj.ac.in/~guptapk/"><i class="fa-solid fa-house"></i></a>
                                        <a href="tel:+91-291-2801709"><i className="bi bi-phone-fill"></i></a>
                                        <a href="https://www.linkedin.com/in/prashant-kumar-gupta-0827b416/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Prashant Kumar Gupta</h4>
                                    <span>Assistant Professor</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:Indian Institute of Technology Kanpur</span></p>
                                    <p>lectrochemical Energy Storage Devices (Lithium, Sodium and Zinc Ion Battery), Electrocatalysis (HER, OER, CER, and Electrochemical CO2 Reduction), Electrochemical Biosensors</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/praveenks.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: praveenks@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/196313"><i className="bi bi-person-fill"></i></a>
                                        <a href="http://home.iitj.ac.in/~praveenks/"><i class="fa-solid fa-house"></i></a>
                                        <a href="tel:+91-291-2801712"><i className="bi bi-phone-fill"></i></a>
                                        <a href="https://www.linkedin.com/in/praveen-kumar-sappidi-4a60151b/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Praveen Kumar Sappidi</h4>
                                    <span>Assistant Professor</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:Indian Institute of Technology Madras</span></p>
                                    <p>Multiscale modeling, Molecular simulation, Free energy simulations, Contaminant separation materials, Ionic liquid based solvents, Polymeric materials</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/rasapu.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: rasapu@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/167042"><i className="bi bi-person-fill"></i></a>
                                        <a href="https://sites.google.com/iitj.ac.in/photocaterresearchgroup/home"><i class="fa-solid fa-house"></i></a>
                                        <a href="tel:+91-291-2801708"><i className="bi bi-phone-fill"></i></a>
                                        <a href="https://www.linkedin.com/in/ramesh-asapu/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Ramesh Asapu</h4>
                                    <span>Assistant Professor</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:University of Antwerp, Belgium</span></p>
                                    <p>Photocatalysis; Environmental remediation; Modeling & Simulation; Plasmonic nanomaterials; Perovskites</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/sumitkamal.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: sumitkamal@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/259027"><i className="bi bi-person-fill"></i></a>
                                        <a href="https://sites.google.com/iitj.ac.in/sumitkamal-green-lab/home"><i class="fa-solid fa-house"></i></a>
                                        <a href="tel:+91-291-2801715"><i className="bi bi-phone-fill"></i></a>
                                        <a href="https://www.linkedin.com/in/sumit-kamal-868b37170/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Sumit Kamal</h4>
                                    <span>Assistant Professor</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:Indian Institute of Technology Bombay</span></p>
                                    <p>Fine Chemicals; Catalysis and Reaction Engineering, Process Development; Green Technology; Chemical Reaction Kinetics</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/tara.jpeg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: tckumawat@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/259025"><i className="bi bi-person-fill"></i></a>
                                        <a href="http://home.iitj.ac.in/~tckumawat"><i class="fa-solid fa-house"></i></a>
                                        <a href=""><i className="bi bi-phone-fill"></i></a>
                                        <a href="https://www.linkedin.com/in/tara-chand-kumawat-87b3185b/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Tara Chand Kumawat</h4>
                                    <span>Assistant Professor</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:Indian Institute of Technology Kanpur</span></p>
                                    <p>Hydrodynamic stability; flow through porous media; Computational Fluid Dynamics; Antibubbles</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/vikky.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: vikky@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="https://iitj.irins.org/profile/196164"><i className="bi bi-person-fill"></i></a>
                                        <a href="https://anandvikky90.wixsite.com/vikky/about"><i class="fa-solid fa-house"></i></a>
                                        <a href="tel:+91-291-2801710"><i className="bi bi-phone-fill"></i></a>
                                        <a href="https://www.linkedin.com/in/vikky-anand-9018a05a/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Vikky Anand</h4>
                                    <span>Assistant Professor</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D.:Indian Institute of Technology Bombay</span></p>
                                    <p>Electrohydrodynamics; Multiphase flow; Electro-desalting; Soft matter; Rheology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Team Section --> */}
        </>
    )
}
