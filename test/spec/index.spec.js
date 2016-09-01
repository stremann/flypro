import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import createStore from '../../src/';

chai.use(sinonChai);

describe('Create store', () => {
    let mockStore;
    let mockHandler;
    let mockState;
    let mockListener;

    beforeEach(() => {
        mockHandler = (state, command) => command.type === 'TEST_FLYPRO' ? 'newState' : state;
        mockState = () => 'mockState';
        mockStore = createStore(mockHandler, mockState);
        mockListener = sinon.stub();
    });

    it('should return public API', () => {
        expect(mockStore).to.deep.equal({
            send: mockStore.send,
            subscribe: mockStore.subscribe,
            getState: mockStore.getState,
            getListeners: mockStore.getListeners
        });
    });

    it('should always retrieve relevant state', () => {
        expect(mockStore.getState()).to.equal(mockState);
    });

    it('should always retrieve relevant listeners', () => {
        expect(mockStore.getListeners()).to.deep.equal([]);
    });

    it('should add listener when subscribing to store', () => {
        mockStore.subscribe(mockListener);
        expect(mockStore.getListeners()).to.deep.equal([mockListener]);
    });

    it('should remove listener when unsubscribing from store', () => {
        const mockStoreUnsubscribe = mockStore.subscribe(mockListener);
        mockStoreUnsubscribe();
        expect(mockStore.getListeners()).to.deep.equal([]);
    });

    it('should change current state when sending a command', () => {
        mockStore.send({ type: 'TEST_FLYPRO' });
        expect(mockStore.getState()).to.equal('newState');
    });

    it('should invoke listener when sending a command', () => {
        mockStore.subscribe(mockListener);
        mockStore.send({ type: 'TEST_FLYPRO' });
        expect(mockListener).calledWith();
    });
});
