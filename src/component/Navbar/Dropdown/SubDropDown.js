import React, {useState} from 'react'

// ==== Styles ==== 
import './Dropdown.css'

// ==== Dependencies ===
import { Link } from 'react-router-dom'

// ==== IMPORTS ====
import {energyStorageSubDropDown} from '../../../data/NavItems'

export default function SubDropdown() {

  const [subDropdown, setSubDropdown] = useState(false)

  return (
    <>
    <ul className={subDropdown ? 'subDropDownMenu clicked' : 'subDropDownMenu' } onClick={() => setSubDropdown(!subDropdown)}>
            {energyStorageSubDropDown.map((item)=>{
              return(
                <li key={item.id} className='navContent'>
                  <Link a to={item.path} onClick={() => setSubDropdown(false)}>{item.title}</Link>
                </li>
              );
            })}
    </ul>
    </>
  );
}
