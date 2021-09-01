import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux'; // 做连接，让组件和store做连接
import { Input, Button, List } from 'antd';
import {getInputChangeAction, getAddItemAction, getDeleteAction} from './store/actionCreators';
class TodoList extends Component{
  render(){
    return (
      <div>
        <h2>react-redux</h2>
        <div>
          <Input 
            value={this.props.inputValue} 
            onChange={this.props.changeInputValue}
            style={{width: '300px', marginRight: '10px'}}
          />
          <Button type="primary" 
            onClick={this.props.handleClick}>提交</Button>
        </div>
        <List
            style={{marginTop: '10px', width: '300px'}}
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item onClick={()=>{this.props.handelDeleteItem(index)}}>
                {item}
              </List.Item>
            )}
          />
      </div>
    )
  }
}
// 把store中的数据映射给这个组件变成这个组件里的propers
// 参数state是store中的数据
// return 对象中的inputValue属性，就是props可利用的属性
const mapStateToProps = (state) =>{
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// 
// 把store.dispatch方法, 挂载到 props上
const mapDispatchToProps = (dispatch)=>{
  return {
    changeInputValue(e){
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
    },
    handleClick(){
      const action = getAddItemAction();
      dispatch(action);
    },
    handelDeleteItem(index){
      const action = getDeleteAction(index);
      dispatch(action);
    }
  }
}
// connect做连接，让组件和store做连接, 有两个连接参数：mapStateToProps, mapDispatchProps
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);