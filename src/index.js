export function createStore(handler, state) {
    var currentHandler = handler;
    var currentState = state;
    var listeners = [];

    function getState() {
        return currentState;
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

    send({type: 'INIT_FLYPRO'});

    return {send, subscribe, getState};
}