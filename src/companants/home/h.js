// export const Menu = [
//     {
//         title:"Home",
//         url:"/",
//         cname:"nav-links",
//         icon:"fa-solid fa-house"
//     },
//     {
//         title:"About",
//         url:"/about",
//         cname:"nav-links",
//         icon:"fa-solid fa-circle-info"
//     },
//     {
//         title:"Service",
//         url:"/service",
//         cname:"nav-links",
//         icon:"fa-solid fa-briefcase"
//     },
//     {
//         title:"Contact",
//         url:"/contact",
//         cname:"nav-links",
//         icon:"fa-solid fa-address-book"
//     }

// ]


// import React from 'react';
// import { Link } from 'react-router-dom';
// import "../header/Header.css";
// import {Menu} from "../menu/Menu";

// const Header = () => {
//   return (
//     <div>
//      <nav className='navitems'>
//       <h1>Trippy</h1>
//       <ul className='listitmes'>
//         {Menu.map((item,index)=>{
//           return(
//             <li key={index}>
//               <a href={item.url}><i className={item.icon}></i> {item.title}</a>
//            </li>
//            );
//         })}
//       </ul>
//      </nav>
//     </div>
//   )
// }

// export default Header