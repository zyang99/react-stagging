import React, { Component } from 'react';
import './index.css'

class Footer extends Component {
  // 全选checkbox的回调
  handleCheckAll = ()=>{
    this.props.checkAll()
  }
  // 清除已完成
  handleClearDone =()=>{
    if(window.confirm('确认清除已完成的？')){
      this.props.clearDone()
    }
  }
  render() {
    const {todos} = this.props
    // 已完成
    const doneCount = todos.reduce((pre,current)=>{
      return pre + (current.done ? 1:0)
    },0)
    // 总数
    const totalCount = todos.length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount===totalCount&&totalCount!==0} onChange={this.handleCheckAll}></input>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{totalCount}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearDone}>清除已完成任务</button>
      </div>
    );
  }
}

export default Footer;
