/*
|--------------------------------------------------------------------------
| Sidebar - Component
|--------------------------------------------------------------------------
*/

// Import

import React from 'react'
import  './sidebar.scss';
import { Link } from 'react-router-dom';

// Siderbar Component

export default props => (
    <aside>
        <nav>
            <ul>
                <li>
                    <Link to="/">List All</Link>
                    <Link to="/add">New Item</Link>  
                </li> 
            </ul>
        </nav>
    </aside> 
)