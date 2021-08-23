import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Item from '../Item';
import './index.css'

class List extends Component {
  // 对项目props进行限制
  static propTypes = {
    updateTodo:PropTypes.func.isRequired,
    todos:PropTypes.array.isRequired,
  }

  render() {
    const {todos,updateTodo,deleteTodo} = this.props
    return (
      <div>
        <ul className="todo-main">
          {
            todos.map(item=>{
              return <Item key={item.id} {...item} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            })
          }
        </ul>
      </div>
    );
  }
}

export default List;
