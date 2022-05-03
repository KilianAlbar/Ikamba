import React, {useEffect, useState} from 'react'

// === Styles
import './Searchbar.css'

// === Material UI === 
import { TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

// === ASSETS ===
import Logo from '../../../assets/img/IkambaLogo.png'
import ProfilePanel from '../Panel/ProfilePanel'

// ==== IMPORTS ====
import { commerce } from '../../../lib/commerce';
import { useNavigate, Link } from 'react-router-dom';

export default function Searchbar({totalItems}) {
  const [categories, setCategories] = useState([]);

  const [inputText, setInputText] = useState("");

  useEffect(()=>{
    fetchProducts();
  }, [inputText])

  let inputHandler = (e) => {
        
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
  };

  const fetchProducts = async () =>{
      await commerce.products.list({
        query: inputText,
    }).then((data)=>setCategories(data.data));
  }

  function List(props) {

      //create a new array by filtering the original array
      const filteredData = categories.filter((el) => {
          //if no input the return the original
          if (props.input === '') {
              return '';
          }
          //return the item which contains the user input
          else {
            if(el.name.includes(props.input.toUpperCase())){
              console.log(el);
              return el
            }
          }
      })

      return (
        <ul className="ulSearch">
            { filteredData.map((item) => (
              console.log(item),
                    <li className='liSearch' key={item.id}>
                      { item.categories[0] ? <Link to={'/products/'+item.categories[0].slug}>
                            {item.name}
                          </Link> : 
                          <p>{item.name}</p>
                      }
                    </li>
            ))
            }
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
          <ProfilePanel totalItems={totalItems}/>
        </div>
    </div>
    </>
  )
}
