import React from 'react';
import { Menu } from '../home/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../header/header.css';





const Header = () => {
  return (
    <div>
       <nav className='nav-items'>
          <h3>kamini...</h3>
          <ul>
          {
            Menu.map((item,index)=>{
              return(
                  <li key={item}>
                     <a href={item.url}>
                     <FontAwesomeIcon icon={item.icon}/>
                      {item.title}</a>
                  </li>
              )
            })
          }
         </ul>
       </nav>
    </div>
  )
}

export default Header