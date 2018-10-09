import React, { Component } from 'react';
import Slider from 'react-slick';

import BrewMetrics from '../BrewMetrics';
import Upright from '../Upright';

import './styles.scss';


export default class Work extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      cssEase: "ease-in-out",
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className='work'>
        <Slider {...settings}>
          <img src='/tmp/Brewmetrics.png' />
          <img src='/tmp/image.png' />
        </Slider>
      </div>
    );
  }
}

{/* <BrewMetrics />
<Upright /> */}
