import { wrap } from 'react-flypro';

import * as commands from '../commands/CounterCommand';
import Counter from '../components/CounterComponent';

const states = (state) => ({
   value: state
});

const handlers = (send) => ({
    onIncrement: () => {
        send(commands.increment())
    },
    onDecrement: () => {
        send(commands.decrement())
    }
});

export default wrap(
    states,
    handlers
)(Counter)