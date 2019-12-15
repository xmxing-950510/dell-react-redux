import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{

  constructor(props){
    super(props);
    // 这样写在复杂的组件中会节约性能（后面会解释）
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){

   this.props.onDelete(this.props.index);
  }

  render() {

    
    const { content } = this.props;

    return <div onClick={this.handleClick}>{content}</div>
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  onDelete: PropTypes.func,
  index: PropTypes.number
}
export default TodoItem;