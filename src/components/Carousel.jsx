import React, { useState, useEffect } from 'react';

const Carousel = (props) => {
    const {children} = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [len, setLength] = useState(children.length);

    // console.log('RENDERING Carousel');
    
    // Standard loop
    // const next = () => {
    //     if (currentIndex < (length - 1)) {
    //         setCurrentIndex(prevState => prevState + 1);
    //     }
    // };
    
    // Infinite loop
    const next = () => {
        if (currentIndex < (len - 1) && currentIndex !== (len - 1)) {
            setCurrentIndex(prevState => prevState + 1);
        } else if (currentIndex === (len - 1)) {
            setCurrentIndex(prevState => prevState - (len - 1));
        }
        console.log('len Next: ' + len);
        console.log('currentIndex Next: ' + currentIndex);
    };
    
    // Standard loop
    // const prev = () => {
    //     if (currentIndex > 0) {
    //         setCurrentIndex(prevState => prevState - 1);
    //     }
    // };

    // Infinite loop
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        } else if (currentIndex === 0) {
            setCurrentIndex(prevState => prevState + (len - 1));
        }
        console.log('len Prev: ' + len);
        console.log('currentIndex Prev: ' + currentIndex);
    };

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children]);

    return (
        <React.Fragment>
            <div className="carousel-container">
                <div className="carousel-wrapper">
                    {/* You can alwas change the content of the button to other things */}
                    <button className="left-arrow" onClick={prev}>
                        &lt;
                    </button>
                    <div className="carousel-content-wrapper">
                        <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {children}
                        </div>
                    </div>
                    <button className="right-arrow" onClick={next}>
                        &gt;
                    </button>
                </div>
                <p>React JS</p>
            </div>
        </React.Fragment>
    )
}

export default Carousel;