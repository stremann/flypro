import React, { PropTypes } from 'react';

const Counter = ({value, onIncrement, onDecrement}) => (
    <div>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
            +
        </button>
        {' '}
        <button onClick={onDecrement}>
            -
        </button>
    </div>
);

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
};

export default Counter;