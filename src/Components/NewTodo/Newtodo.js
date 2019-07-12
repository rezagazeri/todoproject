import React, { Component } from 'react';
import uuid from 'uuid/v4';
import './newtodo.css';

class Newtodo extends Component{
    constructor(props){
        super(props);
        this.state = {
            task :""
        };
        this.handleOnsubmit = this.handleOnsubmit.bind(this);
        this.handleOnchange = this.handleOnchange.bind(this);
    }
    handleOnsubmit(evt){
       evt.preventDefault();
       this.props.addtodo({...this.state,id : uuid(),completed : false });
       this.setState({task :""});
    }
    handleOnchange(evt){
       this.setState({
           [evt.target.name]: evt.target.value
       });
    }
    render() {
        return (
            <form onSubmit ={this.handleOnsubmit} className = 'NewTodoForm'>
                <label htmlFor = "forminput">New Todo</label>
                <input  type='text' placeholder = "Enter New Todo"  id="forminput"
                  onChange ={this.handleOnchange} 
                  name = "task"
                  value = {this.state.task} 
                />
                <button><span>Add Todo</span></button>
            </form>
        );
    }
}
export default Newtodo;