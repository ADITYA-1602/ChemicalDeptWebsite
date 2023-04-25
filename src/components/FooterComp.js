import React, { useRef } from 'react';
import {message } from 'antd';
import emailjs from '@emailjs/browser';

export default function FooterComp() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tshpbrb', 'template_u5iam6l', form.current, '_emESdC9xiudXx0RY')
            .then((result) => {
                success();
                e.target.reset();
            }, (error) => {
            });
    };
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi
            .open({
            type: 'loading',
            content: 'Action in progress..',
            duration: 2.0,
            })
            .then(() => message.success('Thank you for Subscribing!', 2.5))
    };
    return (
        <>
            {contextHolder}
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3><strong>Contact Us</strong></h3>
                                <p>Department of Chemical Engineering </p>
                                <p>Anantharman Building</p>
                                <p>Indian Institute of Technology Jodhpur</p>
                                <p>NH-62, Nagaur Road, Karwar, Jodhpur District</p>
                                <br/>
                                <strong>Phone:</strong> <a href="tel:+91-291-2801702">+91-291-2801702</a><br />
                                <strong>Email:</strong> <a href="mailto: office_che@iitj.ac.inn">office_che@iitj.ac.in</a><br />
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://www.iitj.ac.in/">IIT Jodhpur</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="http://172.16.100.160:8080/ERP_IITJ/">Academic ERP</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="http://172.16.100.147:8081/servicedesk/customer/portal/2/user/login?destination=portal%2F2">CC HelpDesk</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://sites.google.com/iitj.ac.in/publicationsiitjodhpur/">Publications @ IITJ</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://library.iitj.ac.in/">Library: The Learning Hub</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="http://172.16.100.168:8080/jspui/handle/123456789/29">Bus Schedule</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Quick Picks</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://iitj.ac.in/footer/index.php?id=contact">Contact</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="http://172.16.100.168:8080/jspui/">Repository</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://iitjodhpur.kvs.ac.in/">KV IIT Jodhpur</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://iitj.ac.in/footer/index.php?id=how_to_reach_iit_jodhpur">How to reach IIT Jodhpur</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://sites.google.com/iitj.ac.in/cccd">Commemorative Days @ IIT Jodhpur</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="https://iitj.ac.in/infocus/index.php?id=Recruitments">Recruitments</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Our Department publishes a quarterly newsletter.</p>
                                <form ref={form} onSubmit={sendEmail}>
                                    <input type="email" name="email" required/>
                                    <input type="submit" value="Subscribe" onClick={success}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy;2023 All Rights Reserved, <strong><span>IIT Jodhpur</span></strong>.
                        </div>
                        <div className="credits">
                            For any comments/enquiries/feedback, please eMail to the <a href="mailto: webmaster@iitj.ac.in">Webmaster</a>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="https://twitter.com/ChemEngg_IITJ" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="https://www.facebook.com/ChemEngg.IITJ/" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="https://www.instagram.com/chemengg_iitjodhpur/" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UCFfCylvEDIB1IH4GaRVRyLA" className="youtube"><i className="bx bxl-youtube"></i></a>
                        <a href="https://in.linkedin.com/company/dept-chem-engg-iit-jodhpur?original_referer=https%3A%2F%2Fwww.google.com%2F" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}