import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'
import './style.css';
import axios from 'axios';

class TodoList extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }
  handleBtnClick() {
   
    this.setState((prevState)=>(
        {
     
        list: [...prevState.list,prevState.inputValue],
        inputValue: ''
          }
      ))
  }
  handleInputChange(e) {
    const value = e.target.value;
    this.setState(()=>{
      return {
        inputValue: value
      }
    })
    
  }
  handleItemDelete(index){
    const list = [...this.state.list];
    list.splice(index,1);

    this.setState(()=>({
      list: list
    }))
  }


  componentDidMount(){
    axios.get('todolist.json')
    .then((res)=>{
      console.log(res.data);
      this.setState(()=>{
        return {
          list: res.data
        }
      })
    })
    .catch(()=>{alert('error')})
  }
  render () {
    
    return (
      <Fragment>

        <div>
          <label htmlFor="inputarea">
            输入内容

          </label>
          <input id="inputarea"  className="input" value={this.state.inputValue} onChange={this.handleInputChange}/>

          <button onClick={this.handleBtnClick}>提交</button> 
        </div>
        <ul>
          {
            this.state.list.map((item,index)=>{
              return  <TodoItem content={item} index={index} key={index} onDelete={this.handleItemDelete}/>                
            })
          }
        </ul>
      </Fragment>
      
    )
  }

}

export default TodoList