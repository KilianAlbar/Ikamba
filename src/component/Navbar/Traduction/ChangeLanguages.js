import React, {useState} from 'react'

// ==== Assets ====
import UKicon from '../../../assets/img/UK-icon.jpeg'
import FRicon from '../../../assets/img/FR-icon.png'

// ==== Imports ====
import LanguageIcon from '@mui/icons-material/Language';

// ==== Dependencies ====
import i18n from '../../../data/i18n';


export default function ChangeLanguages() {

    const [langDropdown, setLangDropdown] = useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    function langPanel(){
        return(
            <>
            <img onClick={() => changeLanguage('en')} src={UKicon} alt="UK-icon"/>
            <img onClick={() => changeLanguage('fr')} src={FRicon} alt="FR-icon"/>
            </>
        )
    }

  return (
    <div>
      <button className='langIcon' onClick={() => setLangDropdown(!langDropdown)}><LanguageIcon/></button>
    </div>
  )
}