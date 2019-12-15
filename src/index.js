import React from 'react';
import ReactDOM from 'react-dom';

// import TodoList from './pre_1.0_redux-thunk/redux-todo';  //for thunk
import TodoList from './pre_2.0_redux-saga/redux-todo'; // for saga
// import TodoList from './Pre_3.0_react-redux/TodoList'
// import { Provider } from 'react-redux';
// import store from './Pre_3.0_react-redux/store';


// const App = (
// 	<Provider store={store}>
// 		<TodoList />
// 	</Provider>
// );

ReactDOM.render( <TodoList />, document.getElementById('root')); //for react-redux


