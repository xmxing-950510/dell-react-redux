import React, { Component } from 'react';
import 'antd/dist/antd.css';//引入 Ant Design 样式文件
import store from './store/index.js';
import { getTodoList, getInputChangeAction, getAddItemAction, getDeleteAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';



class TodoList extends Component{

  constructor(props){
    super(props);
    this.state= store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    store.subscribe(this.handleStoreChange);

  }
  handleStoreChange(){
    this.setState(store.getState());
  }
  handleInputChange(e){
     
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
    
  }
  handleItemDelete(index){
    const action = getDeleteAction(index);
    store.dispatch(action);
  }
  handleBtnClick(){
    const action = getAddItemAction();
    store.dispatch(action);
  }

  componentDidMount(){
    const action = getTodoList();
    store.dispatch(action); //调用这步时，action代表的函数会被执行，同时
    //会给执行的函数传递一个函数参数 dispatch
  }

  render() {

    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
    
  }
}
export default TodoList