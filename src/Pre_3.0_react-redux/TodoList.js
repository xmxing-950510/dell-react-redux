import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getInputChangeAction, getAddItemAction, getDeleteAction} from './store/actionCreators';
class TodoList extends Component{
  render(){
    return (
      <div>
        <div>
          <input value={this.props.inputValue} 
            onChange={this.props.changeInputValue}/>
          <button onClick={this.props.handleClick}>提交</button>
        </div>
        <ul>
          {
            
            this.props.list.map((item, index)=>{
              return <li key={index} onClick={()=>{this.props.handelDeleteItem(index)}}> {item} </li>
            })
          }
        </ul>
      </div>
    )
  }
}
// 参数state是store中的数据
// return 对象中的inputValue属性，就是props可利用的属性
const mapStateToProps = (state) =>{
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// store.dispatch, 挂载到 props上
const mapDispatchProps = (dispatch)=>{
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
export default connect(mapStateToProps,mapDispatchProps)(TodoList);