import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  // 状态在哪儿，操作状态的方法就写在哪儿

  state = {
    todos:[
      {id:1,name:'吃饭',done:true},
      {id:2,name:'睡觉',done:false},
      {id:3,name:'写代码',done:true},
      {id:3,name:'发呆',done:false},
    ],
  }
  // 添加todo
  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj,...todos]
    this.setState({todos:newTodos})
  }
  // 更新任务的完成状态
  updateTodo = (id,done)=>{
    // console.log(id,done);
    const {todos} = this.state
    // console.log(todos);
    const newTodos = todos.map(item=>{
      item.done = item.id===id ? done:item.done
      return item
    })
    this.setState({todos:[...newTodos]})
    
  }
  // 删除某个任务
  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter(item=>{
      return item.id!==id
    })
    this.setState({todos:newTodos})
  }
  // 全选
  checkAll = ()=>{
    const {todos} = this.state
    // 当点击全选按钮的时候 如果有未选的则是全部选中 如果没有则是取消全选
    const todoAllFlag = todos.find(item=>item.done===false)
    const newTodo = todos.map(item=>{
      item.done = todoAllFlag ? true:false
      return item 
    })
    console.log(newTodo);
    this.setState({todos:newTodo})
  }
  // 清除已完成的
  clearDone = ()=>{
    const {todos}=this.state
    const newTodos = todos.filter(item=>{
      return !item.done
    })
    this.setState({todos:newTodos})
  }
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} checkAll={this.checkAll} clearDone={this.clearDone}/>
        </div>        
      </div>
    );
  }
}

export default App;

