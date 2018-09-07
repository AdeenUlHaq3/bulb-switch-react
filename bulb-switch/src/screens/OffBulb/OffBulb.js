import React from 'react';
import ToggleButton from 'react-toggle-button';


function OffBulb(props) {
  return (
    <div className="App">
      <img alt='offBulb' className='img' src={require('./Images/offbulb.jpg')} />
      <ToggleButton value={false} onToggle={props.toggle} />
    </div>
  );
}

export default OffBulb;
