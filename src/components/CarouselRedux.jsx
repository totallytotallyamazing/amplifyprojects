import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { next, prev } from '../redux/features/carousel.feature';


const Carousel = (props) => {
    const {children} = props;

    let dispatch = useDispatch();

    let currentIndexState = useSelector((state) => {
        return state['carousel'];
    });

    let { currentIndex } = currentIndexState;

    // const [carouselState, setCurrentIndex] = useState(0);
    const [len, setLength] = useState(children.length);

    console.log('RENDERING Carousel');
    
    // Standard loop
    // const next = () => {
    //     if (currentIndex < (length - 1)) {
    //         setCurrentIndex(prevState => prevState + 1);
    //     }
    // };
    
    // Infinite loop
    const handleNext = () => {
        if (currentIndex < (len - 1) && currentIndex !== (len - 1)) {
            dispatch(next(1));
        } else if (currentIndex === (len - 1)) {
            dispatch(next(- (len - 1)));
        }
    };
    
    // Standard loop
    // const prev = () => {
    //     if (currentIndex > 0) {
    //         setCurrentIndex(prevState => prevState - 1);
    //     }
    // };

    // Infinite loop
    const handlePrev = () => {
        if (currentIndex > 0) {
            dispatch(prev(- 1));
        } else if (currentIndex === 0) {
            dispatch(prev(+ (len - 1)));
        }
    };

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children]);

    return (
        <React.Fragment>
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    <button className="left-arrow" onClick={handlePrev}>
                        &lt;
                    </button>
                    <div className="carousel-content-wrapper">
                        <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {children}
                        </div>
                    </div>
                    <button className="right-arrow" onClick={handleNext}>
                        &gt;
                    </button>
                </div>
                <p>React JS</p>
            </div>
        </React.Fragment>
    )
}

export default Carousel