import React, {useState} from 'react'

// ==== Styles ==== 
import './Navbar.css'

// ==== Dependencies ===
import { Link } from 'react-router-dom'
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// ==== IMPORTS ====
import {navItems} from '../../data/NavItems'
import MenuItems from './Dropdown/MenuItems';
import ProfilePanel from './Panel/ProfilePanel';



export default function Navbar() {

  

  
  return (
  <>
    <div className="navContainer">
    <nav>
        <ul className='categories'>
          {navItems.map((menu) =>{
            const depthLevel = 0; // for dynamically add varying arrows to show dropdown exists or detect a second level of dropdown
            return <MenuItems items={menu} key={menu.id} depthLevel={depthLevel}/>
          })}
        </ul> 
    </nav>
    </div>
  </>
  )
}

