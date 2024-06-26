import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imaging from 'next/image'; // Import the Image component from next/image
import FirstSlideImage from './IMAGES/pexels-goumbik-296282.jpg';
import SecondSlideImage from './IMAGES/pexels-jill-wellington-1638660-39853.jpg';
import ThirdSlideImage from './IMAGES/pexels-thatguycraig000-1563356.jpg';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Imaging src={FirstSlideImage} alt="First slide" layout="responsive" width={500} height={300} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Imaging src={SecondSlideImage} alt="Second slide" layout="responsive" width={500} height={300} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Imaging src={ThirdSlideImage} alt="Third slide" layout="responsive" width={500} height={300} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;
