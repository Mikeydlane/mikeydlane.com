import React, { Component } from 'react';
import BrewMetrics from './BrewMetrics'
import Upright from './Upright'
import Treble from './Treble'
import Ponder from './Ponder'

import './styles.scss';


export default class WorkDetails extends Component {

  render() {
    switch (this.props.component) {
      case 'BrewMetrics':
        return <BrewMetrics />;
        break;
      case 'Upright':
        return <Upright />;
        break;
      case 'Treble':
        return <Treble />;
        break;
      case 'Ponder':
        return <Ponder />;
        break;
      default:

    }
  }
}
