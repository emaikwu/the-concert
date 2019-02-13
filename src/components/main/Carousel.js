import React, { Component } from 'react'
import Slider from 'react-slick';
import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

export class Carousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500
    }
    return (
      <div 
        className="carousel_wrapper"
        style={{
          overflow: "hidden",
          height:"100vh"
        }}
        >
        <Slider {...settings}>
          <div>
            <div className="carrousel_image"
              style={{
                background: `url(${slide_one})`,
                height: "100vh",
                width: `window.innerHeightpx`
              }}
            >
            </div>
          </div>
          <div>
            <div className="carrousel_image"
              style={{
                background: `url(${slide_two})`,
                height: "100vh"
              }}
            >
            </div>
          </div>
          <div>
            <div className="carrousel_image"
              style={{
                background: `url(${slide_three})`,
                height: "100vh"
              }}
            >
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}

export default Carousel
