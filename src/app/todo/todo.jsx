/*
|--------------------------------------------------------------------------
| Todo - Component
|--------------------------------------------------------------------------
*/

// Import

import React, { Component } from 'react'
import  {Database} from '../services/dao';


// Import Components

import PageHeader from '../shared/pageHeader'
import TodoList from './todoList'
import TodoSearch from './todoSearch'


// Todo Component

export default class Todo extends Component {

    constructor(props){
        super(props)

        this.database = new Database()
        this.state = { itens: [], searchdata: ''}

        this.startDatabase()

        this.searchEngine = this.searchEngine.bind(this)
        this.deleteData = this.deleteData.bind(this)
        this.check = this.check.bind(this)
    }

    startDatabase() {
        this.database.start().then( db => {
            db.findAll().then( itemsList => {
                this.setState({itens: itemsList}) 
            });
        })
    }

    searchEngine(e){

       let inputValue = e.target.value
       this.setState({ searchdata: inputValue})

    }

    deleteData(itemId){

        if(confirm('Deseja Realmente deletar?')) {
            this.database.remove(itemId).then( itemsList => {
                alert(`Tarefa ${itemId} deletada`)
                this.setState({itens: itemsList})  
            });
         }
      
    }

    check(itemId){
        this.database.find(itemId).then(item => {
            item.isChecked = !item.isChecked;
            this.database.update(item).then(itemsList => {
                this.setState({itens: itemsList})
            })
        })
    }

    // Render Component and Childs
 
    render() {

        return ( 
            <main>
                <div className="main">
                    <PageHeader title="List Task"/> 
                    <TodoSearch itens={this.state.itens} searchEngine={this.searchEngine}/>
                    <TodoList data={this.state} deleteData={this.deleteData} check={this.check}/>  
                </div>
            </main>
        )
    }
}  




