import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import "../styles/LandingStyles.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
    return (
        <Carousel autoPlay>
                <div>
                    <img src="delhi1.jpg" />
                    <p className="Delhi">Legend 1</p>
                </div>
                <div>
                    <img src="agra1.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="udaipur1.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        // <Carousel data-bs-theme="dark" className="carousel">
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src="delhi1.jpg"  // Replace with your actual image path
        //       alt="First slide"
        //     />
        //     <Carousel.Caption>
        //       <h5>First slide label</h5>
        //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
    
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src="agra1.jpg"  // Replace with your actual image path
        //       alt="Second slide"
        //     />
        //     <Carousel.Caption>
        //       <h5>Second slide label</h5>
        //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
    
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src="udaipur1.jpg"  // Replace with your actual image path
        //       alt="Third slide"
        //     />
        //     <Carousel.Caption>
        //       <h5>Third slide label</h5>
        //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        // </Carousel>
      );
}

export default Banner