import React, {useState} from 'react'

// ==== Styles ==== 
import './Dropdown.css'

// ==== IMPORTS ====
import MenuItems from './MenuItems'

export default function Dropdown({submenus, dropdown, depthLevel}) {

  depthLevel = depthLevel+1;

  const dropdownClass = depthLevel > 1 ? 'dropdownSubMenu' : '';

  return (
    <ul className={`dropDownMenu ${dropdownClass} ${dropdown ? 'show' : ''}`}>
      {submenus.map((submenu) => (
        <MenuItems items={submenu} key={submenu.id} depthLevel={depthLevel}/>
      ))}
    </ul>
  );
}
