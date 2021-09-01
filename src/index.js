import React from 'react';
import ReactDOM from 'react-dom';

// import  TodoList from './pre/App' 
// import TodoList from './pre_0.0_store/TodoList' // redux
// import TodoList from './pre_1.0_redux-thunk/redux-todo';  //for thunk
// import TodoList from './pre_2.0_redux-saga/redux-todo'; // for saga
import TodoList from './Pre_3.0_react-redux/TodoList'  // for react-redux
import { Provider } from 'react-redux';     // for react-redux
import store from './Pre_3.0_react-redux/store';  // for react-redux

// Provider是React-redux提供的第一个核心API,
// 作用是关连store,Provider所有组件都能获得store的内容
const App = (
	<Provider store={store}>
		<TodoList />
	</Provider>
);

// const App = (
// 	<TodoList />
// );

ReactDOM.render( App, document.getElementById('root')); //for react-redux


