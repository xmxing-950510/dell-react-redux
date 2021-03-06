import React, { Component} from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'

class TodoList extends Component{
  
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this); 
    // subscribe订阅store，只要store中的数据发生改变，subscribe中的方法就会被执行
    store.subscribe(this.handleStoreChange);
  }

  render() { 
    return ( 
        <div style={{marginTop: '10px', marginLeft: '10px'}}> 
          <h2>redux</h2>
          <div>
            <Input 
              value={this.state.inputValue} 
              placeholder="todo info" 
              style={{width: '300px', marginRight: '10px'}}
              onChange={this.handleInputChange}
            /> 
            <Button type="primary" onClick={this.handleBtnClick} >提交</Button>
          </div>
          <List
            style={{marginTop: '10px', width: '300px'}}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={this.handleItemDelete.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
    )
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }
  
  handleStoreChange() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action);
  }
  handleItemDelete(index) {
    const action = getDeleteItemAction(index) 
    store.dispatch(action);
  }
}
export default TodoList
