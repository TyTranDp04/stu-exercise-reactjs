import React from 'react';
import { Link } from 'react-router-dom';
const  Submenu = (props) => {
  const option = props.value
  const show = props.value.status
  return (
   
      <ul className={show?"sub__menu-option sub__menu-option--active":"sub__menu-option"}>  
        { 
          option.option.map((e, index)=>(
          <li key={index} className=" nav__link-option">
            <Link className='nav__link-option--href' to={e.link}>{e.title}</Link>
          </li>
          ))
        }      
      </ul>
        

  )
}
export default Submenu;