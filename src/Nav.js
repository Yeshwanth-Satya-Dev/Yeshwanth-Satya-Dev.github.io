import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <h1><center>ASSIGNMENT 1</center></h1>
            <ul align='left'>
               <Link to ='/home'>
                <li>
                    Home
                </li>
                </Link>
                <Link to ='/about'>
                <li>
                    About
                </li>
                </Link>
                <Link to ='/contact'>
                <li>
                    Contact
                </li>
                </Link>
            </ul>
        </nav>
    )
}
export default Nav;