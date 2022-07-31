import React from 'react';
import desktop from '../img/desktop.png';
import mobile from '../img/mobile.png';

const Home = () => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col mt-3">
                        <h3 className="text-primary">Build: <span className="text-secondary">npm install bootstrap @fortawesome/fontawesome-free axios react-router-dom react-redux @reduxjs/toolkit</span></h3>
                        <p>*Console logs included to see number of Renders.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center mt-3">
                        <button 
                            type="button"
                            className="btn btn-primary mt-3"
                            onClick={() => window.open('https://pagespeed.web.dev/report?url=https%3A%2F%2Fmaster.dctomhdld73zy.amplifyapp.com%2F&form_factor=desktop', '_blank')}
                        >
                            PageSpeed Test
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 text-center mt-3">
                        <img src={mobile} className="screens" alt="Google PageSpeed Insights Desktop" />
                    </div>
                    <div className="col-md-6 text-center mt-3">
                        <img src={desktop} className="screens" alt="Google PageSpeed Insights Mobile" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;