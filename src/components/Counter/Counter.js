import React, {Component} from 'react';
import CountUp, {startAnimation} from 'react-countup';
import './Counter.css';
import data from './source.js';
import VisibilitySensor from 'react-visibility-sensor';

class Counter extends Component {
  state = {
    didViewCountUp: false
  };

  onVisibilityChange = isVisible => {
    if (isVisible) {
        this.setState({didViewCountUp: true});
    } else {
        this.setState({didViewCountUp: false})
    }
  }

 
  render() {
    const countersList = data.map((item, index) => (
      <div
        key={index}
        className='CounterWrapper'>
        <VisibilitySensor
          onChange={this.onVisibilityChange}
          offset={{top: 10}}
          delayedCall>
          <CountUp 
            className='CounterItem'
            start={0}
            end={this.state.didViewCountUp ? item.end : 0}
            suffix={item.suffix}
            duration={5} />
        </VisibilitySensor>
        <p>
          {item.explanation}
        </p>
      </div>
      
    ))

    
    return (
      <div className='CounterContainer'>
        { countersList }
      </div>)
  }
}

export default Counter;