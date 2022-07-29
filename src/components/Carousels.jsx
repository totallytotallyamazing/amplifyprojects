import React from 'react';
import Carousel from './CarouselRedux';

const Carousels = () => {

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col mt-3">
                        <p className="h3 text-primary">Carousel</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, dolores eius voluptates quos doloremque commodi excepturi reprehenderit cumque quia provident praesentium sequi magnam voluptatem aliquid aspernatur consectetur rem laboriosam numquam?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col mt-3 text-center d-flex justify-content-center">
                        <Carousel>
                            <img src="https://loremflickr.com/320/240?lock=1" alt="placeholder 1" />
                            <img src="https://loremflickr.com/320/240?lock=212" alt="placeholder 2" />
                            <img src="https://loremflickr.com/320/240?lock=30976" alt="placeholder 3" />
                            <img src="https://loremflickr.com/320/240?lock=892" alt="placeholder 4" />
                            <img src="https://loremflickr.com/320/240?lock=654" alt="placeholder 5" />
                            <img src="https://loremflickr.com/320/240?lock=765" alt="placeholder 6" />
                            <img src="https://loremflickr.com/320/240?lock=800" alt="placeholder 7" />
                            <img src="https://loremflickr.com/320/240?lock=210" alt="placeholder 8" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Carousels;