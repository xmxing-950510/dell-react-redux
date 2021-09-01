import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value)=>({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM

})
export const getDeleteAction = (index) =>({
    type: DELETE_TODO_ITEM,
    index
})
// actionCreator中的函数返回一个action对象，
export const initListAction = (data) =>({
    type: INIT_LIST_ACTION,
    data
})
//引入了 redux-thunk， 返回一个函数，有dispatch参数。
// 该函数可以写异步操作，获取action，再派发action。
export const getTodoList = () =>{
    return (dispatch) => {
    	axios.get('./list.json').then((res)=>{
    		const data = res.data;
    		const action = initListAction(data);
    		dispatch(action);
    	})
    }
}
