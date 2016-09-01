export default function createStore(handler, state) {
    const currentHandler = handler;
    let currentState = state;
    const listeners = [];

    function getState() {
        return currentState;
    }

    function getListeners() {
        return listeners;
    }

    function subscribe(listener) {
        listeners.push(listener);

        return function unsubscribe() {
            listeners.splice(listeners.indexOf(listener), 1);
        };
    }

    function send(command) {
        currentState = currentHandler(currentState, command);
        listeners.slice().forEach(listener => listener());
        return command;
    }

    send({ type: 'INIT_FLYPRO' });

    return { send, subscribe, getState, getListeners };
}
