import React from 'react';
const  Submenu = (props) => {
  const option = props.value
  const show = props.value.status
  return (
   
      <ul className={show?"sub__menu-option sub__menu-option--active":"sub__menu-option"}>  
        { 
          option.option.map((e, index)=>(
          <li key={index} className=" nav__link-option">
            <a className='nav__link-option--href' href={e.link}>{e.title}</a>
          </li>
          ))
        }      
      </ul>
        

  )
}
export default Submenu;