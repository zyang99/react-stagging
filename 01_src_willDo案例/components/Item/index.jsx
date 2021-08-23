import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './index.css'
class Item extends Component {
  static propTypes = {
    updateTodo:PropTypes.func.isRequired,
  }
  state = {
    mouse: false,   //标识鼠标移入移出
  }
  // 鼠标移入移出
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }
  // 勾选或取消勾选
  handleCheck = (id)=>{
    return (event)=>{
      // console.log(id,event.target.checked,event);
      this.props.updateTodo(id,event.target.checked)
    }
  }
  // 删除某项任务
  handleClick = (id)=>{
    if(window.confirm('确定删除吗')){
      this.props.deleteTodo(id)
    }
  }
  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <div>
        <li onMouseMove={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
            <input type="checkbox" checked={done} onChange={this.handleCheck(id)}></input>
            <span>{name}</span>
          </label>
          <button className="btn btn-danger" style={{display:mouse ? 'block':'none'}} onClick={()=>this.handleClick(id)}>删除</button>
        </li>
      </div>
    );
  }
}

export default Item;
