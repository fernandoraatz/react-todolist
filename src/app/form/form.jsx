/*
|--------------------------------------------------------------------------
| FOrm - Component
|--------------------------------------------------------------------------
*/

// Import

import React, { Component } from 'react' 
import {Database} from '../services/dao';
import Task from '../models/task.js';
import {withRouter} from 'react-router-dom';

// Todo Component

class Form extends Component {

    constructor(props){
        super(props)

        this.state = {
            newTask: new Task(),
            id:this.props.match.params.id
        }

        this.database = new Database()
        this.save = this.save.bind(this)

        if(this.state.id){
            this.getData(this.state.id)
        }

    }

    save(event){
        event.preventDefault();

        const title = this.refs.title.value;
        const description = this.refs.description.value;
        const newTask = new Task(title, description) 

        if(this.state.id){
            this.database.update(newTask).then(() => {
                alert('Editado com sucesso')
            })

        }else{
            this.database.insert(newTask).then(() => {
                alert('Adicionado com sucesso')
            })
        }

        this.props.history.push('/');


    }

    getData(id) {
        this.database.find(id).then( item => { 
                this.refs.title.value = item.title
                this.refs.description.value = item.description
        });
  
      }

    // Render Component and Childs

    render() {

        
        return ( 
            <main>
            <div className="form">
    
                <div className="page-title">
                    <h1>Add Task</h1> 
                </div>
                <form onSubmit={this.save}>
                    <div className="form-row">
                        <label htmlFor="">Title</label>
                        <input  type="text" ref="title" placeholder="Title" autoComplete="off" name="title"/>
                        <span className="label-error"></span>
                    </div>
                    <div className="form-row">
                        <label htmlFor="">Description</label>
                        <textarea ref="description"  rows="4" placeholder="Description" name="description" ></textarea>
                        <span className="label-error"></span>
                    </div>
                    <div className="form-row"> 
                        <button className="btn-primary" type="submit">Enviar</button>
                    </div>
                </form>  
            </div>
            </main>
        )
    }
}  

export default withRouter(Form);



 