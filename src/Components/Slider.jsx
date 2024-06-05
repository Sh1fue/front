import React, { useState, useRef, useEffect } from 'react';

import './Slider.css';
import bosh from '../assets/bosh.webp';
const Slider = () => {
    const [scrollAmount, setScrollAmount] = useState(0);
    const sliderWrapper = useRef(null);

    const scrollLeft = () => {
        setScrollAmount(prev => prev - window.innerWidth / 5);
    };

    const scrollRight = () => {
        setScrollAmount(prev => prev + window.innerWidth / 5);
    };

    useEffect(() => {
        if (sliderWrapper.current) {
            sliderWrapper.current.style.transform = `translateX(${scrollAmount}px)`;
        }
    }, [scrollAmount]);

    return (
        <div>
            <div className="slider">
                <button className="slide-arrow prev-arrow" onClick={scrollLeft}>&lt;</button>
                <div className="slider-wrapper" ref={sliderWrapper}>
                    <img src={bosh} alt="Logo 1" />
                    <img src={bosh} alt="Logo 2" />
                    <img src={bosh} alt="Logo 3" />
                    <img src={bosh} alt="Logo 4" />
                    <img src={bosh} alt="Logo 5" />
                </div>
                <button className="slide-arrow next-arrow" onClick={scrollRight}>&gt;</button>
            </div>
        </div>
    );
};

export default Slider;
