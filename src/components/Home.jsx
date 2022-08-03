import React from 'react';
import useImagePreloader from './hooks/useImagePreloader';
import desktop from '../img/desktop.png';

const Home = () => {
    
    const preloadSrcList = [
        desktop
    ];

    const { imagesPreloaded } = useImagePreloader(preloadSrcList);

    // console.log('imagesPreloaded:' + imagesPreloaded);

    console.log('RENDERING Home');

    if (imagesPreloaded) {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col mt-3">
                            <h3 className="text-primary">Build: <span className="text-secondary">npm install bootstrap axios react-router-dom react-redux @reduxjs/toolkit</span></h3>
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
                        <div className="col-md-12 text-center mt-3">
                            <img src={desktop} className="screens" alt="Google PageSpeed Insights Mobile" />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    
};

export default Home;