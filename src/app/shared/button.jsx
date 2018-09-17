/*
|--------------------------------------------------------------------------
| Button - Component
|--------------------------------------------------------------------------
*/

// Import

import React, { Component } from 'react'

// Button Component
 
export default class Button extends Component {

    constructor(props){
        super(props)
    }

    render() {
    
        return ( 
          <button onClick={this.props.onClick} >
            <i className="material-icons">{this.props.icon}</i>
          </button>
        )
    }
}