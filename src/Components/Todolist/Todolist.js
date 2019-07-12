import React, { Component } from 'react';
import Newtodo from '../NewTodo/Newtodo';
import Todoitem from '../Todoitem/Todoitem';
import './todolist.css';
class Todolist extends Component{
    constructor(props){
        super(props);
        this.state = {
            items :[]
        };
        this.addTodo= this.addTodo.bind(this);
        this.remove= this.remove.bind(this);
        this.uppdateTodo=this.uppdateTodo.bind(this);
        this.toggleClass = this.toggleClass.bind(this);
    }
     addTodo(item){
         this.setState({items :[...this.state.items,item]});
     }
     //=================================================================
     remove(id){
        this.setState(state=>(
             {
                items :state.items.filter(item=> item.id !== id)
             }
        ));
     }
     //==========================================================================
     uppdateTodo(task,id){
        const state = this.state.items;
        const index = state.findIndex(num=> num.id === id);
        const updateTask = state[index];
        updateTask.task = task;
        state[index] = updateTask ;
        this.setState({items :[...state]});
     }
     //==========================================================================
     toggleClass(task,id){
        const state = this.state.items;
        const index = state.findIndex(num=> num.id === id);
        const updateTask = state[index];
        updateTask.completed = !task;
        state[index] = updateTask ;
        this.setState({items :[...state]});
     }
    render() {
        const todos= this.state.items.map(todo => (
            <Todoitem 
                key={todo.id}
                task = {todo.task}
                remove = {this.remove}
                id ={todo.id} 
                uppdateTodo= {this.uppdateTodo}
                completed = {todo.completed}
                toggleClass = {this.toggleClass}
             />
         ));
        return (
            <div className = 'TodoList'>
                <h1>todo list !<span>a simple react app</span></h1>
                <ul>
                    {todos}
                </ul>
                <Newtodo  addtodo = {this.addTodo} />
            </div>
        );
    }
}
export default Todolist;