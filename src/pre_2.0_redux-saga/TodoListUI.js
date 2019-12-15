import React, { Component } from 'react';
import { Input, Button, List } from 'antd';


class TodoListUI extends Component{
  
  render() {
    return (
        <div style={{marginTop:20,marginLeft:10}}>
          <div > 
            <Input 
              value={this.props.inputValue} 
              placeholder='todo info' 
              style={{width: '300px',marginRight:10}}
              onChange={this.props.handleInputChange}
            />
            <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
          </div>
         
          <List
            style={{
              marginTop:10,
              width:300
            }}
            bordered
            dataSource={this.props.list}
            renderItem={(item,index) => (
             // this.props.handleItemDelete(index)
            
              <List.Item onClick={ ()=>{
                
                this.props.handleItemDelete(index)
              }}>
                {item}
              </List.Item>
            )}
          />
        
        </div>
    )
  }
}

export default TodoListUI