import React, { Component } from 'react';
import './TodoList.css';
import ListItem from './ListItem';
import {library} from '@fortawesome/fontawesome-svg-core';
import{faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class TodoList extends Component {
    constructor(){
        super()
        this.state={
            items:[],
            currentItem:{
                text:"",
                key:""
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this)
        this.setUpdate = this.setUpdate.bind(this)
    }
    handleInput(event){
        this.setState({
            currentItem:{
                text: event.target.value,
                key: Date.now()
            }
        })
    }
    addItem(event){
        event.preventDefault();
        const newItem = this.state.currentItem;
        // console.warn(newItem)
        if (newItem.Text !== ""){
            const newItems = [...this.state.items,newItem];
            this.setState({
                items:newItems,
                currentItem:{
                    text:"",
                    key:""
                }
            })

        }
    }
    deleteItem(key){
        const filteredItems = this.state.items.filter(item=> item.key !==key);
        this.setState({
            items:filteredItems
        })
    }

    setUpdate(text,key){
        const items = this.state.items;
        items.map(item=>{
            if(item.key === key){
                item.text=text;
            }
        })
        this.setState({
            items:items
        })

    }
    render() {
        console.log(this.state.items)
        return (
            <div className='todos'>
                <header>
                    <form id='to-do-form' onSubmit={this.addItem} >
                        <input type="text" placeholder="Enter Text" value={this.state.currentItem.text} onChange={this.handleInput} />
                        <button type="submit">Add</button>
                    </form>
                </header>
                 <ListItem items = {this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />   
            </div>
        )
    }
}

export default TodoList
