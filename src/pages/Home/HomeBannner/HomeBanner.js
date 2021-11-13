import React from 'react';
import './HomeBanner.css';
import 'animate.css';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className=' banner container-fluid'>
            <div className='row'>
                <div className='col-lg-6 col-12 mt-5'>
                    <h1 className=' text-white'>EYE  <span className='text-danger'>&</span> CARE </h1>
                    <br />
                    <p className=' text-light'>
                            
                                You will not be harmed by wearing someone else’s glasses. Because of the eye pushing impact and tiredness, you may have migraines if you wear them for a lengthy amount of time, although there is no long-term danger.
                    </p>
                    <br />
                    <Link to='/products'><button type="button" className="btn btn-danger">Explore More</button></Link>

                </div>
                <div className='col-lg-6 col-12 mt-5'>
                    <img className='animate__animated animate__backInRight' src='/images/banner-1.jpg' />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;