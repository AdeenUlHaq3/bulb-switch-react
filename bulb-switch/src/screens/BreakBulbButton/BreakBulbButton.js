import React from 'react';

function BreakBulbButton(props) {
    return (
        <input type='button' value='Break It' onClick={props.breakBulb} />
    )
}
export default BreakBulbButton;