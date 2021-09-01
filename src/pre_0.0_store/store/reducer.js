import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes';

const defaultState = {
  inputValue: '123',
  list: [1, 2]
}
// reducer必须返回一个函数
// reducer 可以接收state, 但绝不能修改state
//state就是整个store里存储的数据
export default (state = defaultState, action) => { 
  console.log(state, action)
  if (action.type === CHANGE_INPUT_VALUE) {
    // newState对之前的state做深拷贝
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}