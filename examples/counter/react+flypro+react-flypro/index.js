import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'flypro';

import Counter from './wrappers/CounterWrapper';
import counter from './handlers/CounterHandler';

const store = createStore(counter);

function render() {
    ReactDOM.render(
        <Counter store={store} />,
        document.getElementById('counter')
    )
}

render();
store.subscribe(render);