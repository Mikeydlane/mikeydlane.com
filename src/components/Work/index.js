import React, { Component } from 'react';
import Slider from 'react-slick';

import WorkDetails from '../WorkDetails';
import BrewMetrics from '../BrewMetrics';
import Upright from '../Upright';
import Treble from '../Treble';
import Ponder from '../Ponder';

import './styles.scss';


export default class Work extends Component {
  constructor(props) {
    super();
    this.slides = [
      'BrewMetrics',
      'Upright',
      'Treble',
      'Ponder'
    ]
    this.state = {
      sliderInitialized: false,
      currentSlide: 'BrewMetrics'
    }
  }

  setCurrentSlide = (i) => {
    this.setState({ currentSlide: this.slides[i] })
  }

  initSlider = (slider) => {
    this._slider = slider;
    this.setState({ sliderInitialized: true })
  }

  renderControls = () => {
    if (this.state.sliderInitialized) {
      return (
        <div>
          <div className='control-left' onClick={() => this._slider.slickPrev()}>
            <img src='/arrow-l-black.png' />
          </div>
          <div className='control-right' onClick={() => this._slider.slickNext()}>
            <img src='/arrow-r-black.png' />
          </div>
        </div>
      );
    } else return null;
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      cssEase: "ease-in-out",
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: this.setCurrentSlide,
    };

    return (
      <div className='work'>
        <Slider ref={this.initSlider} {...settings}>
          <BrewMetrics />
          <Upright />
          <Treble />
          <Ponder />
        </Slider>
        {this.renderControls()}

        <WorkDetails component={this.state.currentSlide} />

      </div>
    );
  }
}

{/* <BrewMetrics />
<Upright /> */}
