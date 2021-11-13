import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div id="contact" className="container mt-5 pb-5">
                    <div className="row" >
                        <div className="col-lg-3 footer-anchor">
                            <a className="navbar-brand fs-2" to='/home'><span className='text-danger'>SUN</span><span className='text-warning'>GLASSES</span></a>
                            
                        </div>
                        <div className="col-lg-2 footer-anchor">
                            <h3>Compnany</h3><br />
                            <p><a>About</a></p>
                            <p><a>Carrers</a></p>
                            <p><a>Mobile</a></p>
                        </div>
                        <div className="col-lg-2 footer-anchor">
                            <h3>Contact</h3><br />
                            <p><a>Help/FAQ</a></p>
                            <p><a>Press</a></p>
                            <p><a>Affilates</a></p>
                        </div>
                        <div className="col-lg-2 footer-anchor">
                            <h3>More</h3><br />
                            <p><a>Airelinefees</a></p>
                            <p><a>Airline</a></p>
                            <p><a>Low fare tips</a></p>
                        </div>
                        <div className="col-lg-3 footer-anchor">
                            <a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.twitter.com/" target="_blank"><i className="fab fa-twitter-square"></i></a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;