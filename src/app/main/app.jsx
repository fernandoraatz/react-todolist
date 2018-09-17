/*
|--------------------------------------------------------------------------
| Main Component - App
|--------------------------------------------------------------------------
*/

// Import 

var $ = document.querySelector.bind(document);

// Import css/js 

import  '../../css/style.scss';

// Imports React and Routes
 
import React from 'react'
import { BrowserRouter as Router, Route, BrowserHistory} from 'react-router-dom';

// Imports Componentes

import Header from '../shared/header'
import Menu from '../shared/sidebar'
import Todo from '../todo/todo'
import Form from '../form/form'

// Main component

export default props => ( 
              
    <Router history={BrowserHistory}>
        <div>
            <Header/>
            <Menu/>  
            <Route exact path='/' component={Todo} />
            <Route exact path='/add' component={Form} />
            <Route exact path='/add/:id' component={Form} />
        </div>
    </Router>
      
)