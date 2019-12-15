import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware) );

sagaMiddleware.run(todoSagas);

export default store;