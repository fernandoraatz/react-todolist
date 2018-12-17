/*
|--------------------------------------------------------------------------
| Todo - Component
|--------------------------------------------------------------------------
*/

// Import

import React, { Component } from 'react'
import  './search.scss'; 

// Todo Component
 
export default class TodoSearch extends Component {

    constructor(props){
        super(props)
    }

    render() {
    
        return ( 
            <div className="search-box">
                    <div className="container">
                    
                        <span className="search" ><i className="material-icons">search</i></span>
                        <input onChange={this.props.searchEngine} type="search" className="form-field_medium"  placeholder="Pesquisar Tarefas" />
                    </div>
            </div>   
        )
    }


}