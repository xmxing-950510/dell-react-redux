import React, { Component } from 'react';
import 'antd/dist/antd.css';//引入 Ant Design 样式文件
import store from './store/index.js';
import { getInitList, getInputChangeAction, getAddItemAction, getDeleteAction} from './store/actionCreators';
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
    const action = getInitList();
    store.dispatch(action);
    
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