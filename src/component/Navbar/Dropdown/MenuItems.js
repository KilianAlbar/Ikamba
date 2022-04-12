import {useState} from "react";

// ==== IMPORTS ====
import Dropdown from "./Dropdown";


// ==== Styles ====
import './MenuItems.css'

// ==== Dependencies === //
import { useNavigate, useParams } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PersonIcon from '@mui/icons-material/Person';
import ProfilePanel from "../Panel/ProfilePanel";



import React from 'react'

export default function MenuItems({items, depthLevel}) {

    const [dropdown, setDropdown] = useState(false);
    let navigate = useNavigate();

    const handleClick = (path) => {
      if((items.title != "Home") && (items.title != "Contact")){
        navigate('./products/'+path)
      }else{
        navigate('./'+path)
      }
    }

    

  return (
      <li className="navCategories" onMouseEnter={() => setDropdown((prev) =>!prev)} onMouseLeave={() => setDropdown(false)}>
        {items.submenu ? (
        <>
            <button type='button' aria-haspopup='menu' aria-expanded={dropdown ? 'true' : 'false'}>
                {items.title}{""}{depthLevel > 0 ? <KeyboardArrowRightIcon className='arrowRight'/>: <KeyboardArrowDownIcon className='arrowDown'/> } 
            </button>
            <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown}/>
        </>
          ) : (
            <a to='./' onClick={() => handleClick(items.path)}>{items.title}</a>       
        )}
      </li>
  );
}


