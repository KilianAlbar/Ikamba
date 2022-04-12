
import React, {useState} from 'react'

// === Styles
import './Searchbar.css'

// === Material UI === 
import { TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

// === ASSETS ===
import Logo from '../../../assets/img/IkambaLogo.png'

// ==== IMPORTS ====
import data from '../../../data/Data.json'
import ProfilePanel from '../Panel/ProfilePanel'
import ChangeLanguages from '../Traduction/ChangeLanguages'
import LanguageIcon from '@mui/icons-material/Language';

// ==== Dependencies ====
import i18n from '../../../data/i18n';


export default function Searchbar() {
  const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

  function List(props) {
      //create a new array by filtering the original array
      const filteredData = data.filter((el) => {
          //if no input the return the original
          if (props.input === '') {
              return '';
          }
          //return the item which contains the user input
          else {
              return el.text.toLowerCase().includes(props.input)
          }
      })

      return (
        <ul className="ulSearch">
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}      

  return (
    <>
    <div className='searchBar'>
          <TextField 
          className='search' 
          label={<SearchIcon/>}
          variant="standard" 
          onChange={inputHandler}/>
          <List className='searchList' input={inputText} />
    </div>
    <div className='searchBarContainer'>
        <img src={Logo} alt="" className="logo" />
        <div>
          <ProfilePanel/>
        </div>
        
    </div>
    </>
  )
}
