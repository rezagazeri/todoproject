import React, { Component } from 'react';
import './todoitem.css';

export default class Todoitem extends Component {
    constructor(props){
        super(props);
        this.state = {
            isVisible : false ,
            task:this.props.task
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleOnsubmit = this.handleOnsubmit.bind(this);
        this.handleOnchange= this.handleOnchange.bind(this);
        this.handleOnclick = this.handleOnclick.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
//===============================================================================
   handleRemove(){
    this.props.remove(this.props.id);
   }
   //============================================================================
   toggleForm(){
       this.setState({isVisible : !this.state.isVisible});
   }
   //===========================================================================
   handleOnsubmit(evt){
        evt.preventDefault();
        this.props.uppdateTodo( this.state.task,this.props.id);
        this.toggleForm();
   }
   //================================================================================
   handleOnchange(evt){
      this.setState({
           [evt.target.name]: evt.target.value
       });
   }
   //==================================================================================
   handleOnclick(){
      this.props.toggleClass(this.props.completed ,this.props.id);
   }
   //===================================================================================
     render() {
        let result;
        if (this.state.isVisible){
            result = (
             <div className = "Todo">
                <form onSubmit ={this.handleOnsubmit} className="Todo-edit-form" >
                    <input type = 'text'
                     value={this.state.task} 
                     onChange ={this.handleOnchange} 
                     name ='task'/>
                    <button><span>save</span></button>
                </form>
            </div>
            );
        }else{
            result = (
                <div className = "Todo">   
                    <li className = {this.props.completed ? " Todo-task completed" : "Todo-task"} onClick={this.handleOnclick} >
                       {this.props.task}
                    </li> 
                    <div className ="Todo-buttons">  
                        <button onClick={this.toggleForm}><i class ='fas fa-pen'/></button>
                        <button onClick ={this.handleRemove}><i class ='fas fa-trash'/></button>
                    </div> 
               </div> 
            );
        }
        return result;

        
    }
}
