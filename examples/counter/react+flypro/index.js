import React from 'react'
import ReactDOM from 'react-dom'
import createStore from 'flypro'
import Counter from './components/CounterComponent'
import counter from './handlers/CounterHandler'

const store = createStore(counter);

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.send({ type: 'INCREMENT' })}
            onDecrement={() => store.send({ type: 'DECREMENT' })}
        />,
        document.getElementById('counter')
    )
}

render();
store.subscribe(render);