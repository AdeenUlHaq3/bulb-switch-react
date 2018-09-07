import React from 'react';
import ToggleButton from 'react-toggle-button';

function OnBulb(props) {
    return (
      <div className="App">
        <img alt='onBulb' className='img' src={require('./Images/onbulb.webp')} />
        <ToggleButton value={ true } onToggle={props.toggle} />
      </div>
    );
}

export default OnBulb;
