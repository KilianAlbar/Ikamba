import React, {useState} from 'react'
import { Link } from 'react-router-dom';

// ==== Imports====
import { useAuth } from "../../../contexts/AuthContext";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

// ==== Styles ====
import './ProfilePanel.css'

// === Dependencies ===
import { useTranslation } from "react-i18next";
import { Badge } from '@mui/material';
import Cart from '../../Cart/Cart';
import ChangeLanguages from '../Traduction/ChangeLanguages';

export default function ProfilePanel() {

    const [error, setError] = useState("")
    const { logout, currentUser } = useAuth();
    const [panel, setPanel] = useState(false);
    const { t } = useTranslation();
  
    async function handleLogout() {
        try {
          setError("")
          await logout()
        } catch {
          setError("Failed to log out")
        }
    }
  
    function SignUpBtn(){
         return <Link className="signUpBtn" to='./signup'>Sign Up</Link> ;
     }
  
     function LogOutBtn(){
         return <li className={`hideLogout ${currentUser != null ? 'showLogout' : ''}`}><LogoutOutlinedIcon  className='panelIcons'/><Link to='./' onClick={() => handleLogout()}>{t('Logout')}</Link></li>
     }
  
     function Panel(){
       if(currentUser != null){
        return (
            <ul>
                <li><AccountCircleOutlinedIcon className='panelIcons'/><Link to='./profile'>{t('Account')}</Link></li>
                <li><Inventory2OutlinedIcon className='panelIcons' color="action"/><Link to='./cart'>{t('Orders')}</Link></li>
                <LogOutBtn/>
            </ul>
        )
       }else{
         return (
             <ul>
                <li><LoginOutlinedIcon className='panelIcons'/><Link to='./login'>{t('Login')}</Link></li>
                <li><PersonAddAlt1OutlinedIcon className='panelIcons'/><Link to='./signup'>{t('Register')}</Link></li>
            </ul>
         ) 
       }
     }

  return (
        <div className='bannerIcons'>
                <button className='accountIcon' onClick={() => setPanel(!panel)}><PersonIcon/></button>
                <Link className='cartIcon' to='./cart'><Badge className="badge" badgeContent={1} color="secondary"><ShoppingCartIcon/></Badge></Link>
                <ChangeLanguages/>
            <div className={`panelMenu ${panel ? 'showPanel' : 'hidePanel'}`} onMouseLeave={() => setPanel(false)}>
                <Panel/>
            </div>
        {error}
        </div>
  )
}


