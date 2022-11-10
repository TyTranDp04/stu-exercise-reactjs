
import React, { useEffect, useRef, useState} from 'react';
import Submenu from '../Submenu';
import { CaretDownOutlined } from '@ant-design/icons';
function Navigation(props) {
  const value = props.value
  const option = props.listoption
  const refHandle = useRef(null)
  const [handle, setHandle] = useState([])
  useEffect(()=>{
    if(refHandle.current?refHandle.current.className:''){
      setHandle(props.handle)
    }
  }, [props.handle])
 
  if(refHandle.current?refHandle.current.className === 'nav__link sub__menu':''){
    refHandle.current.onclick = ()=>{
      handle.setShowSubmenu(!handle.showSubmenu)
    }
  }
  if(refHandle.current?refHandle.current.className !== 'nav__link sub__menu':''){
    refHandle.current.onclick = ()=>{
      handle.setShowSubmenu(false)
    }
  }
  const status = handle.showSubmenu
  console.log(status);
  return (
    <div>
      <li className={option?'nav__link sub__menu':'nav__link'} ref={refHandle}>
        <div className='nav__link-content'>
          <a className="nav__link--href" href="/#">{value}</a>
            <div className= {status?"list__option-icon list__option-icon--active":"list__option-icon"}>
            {
              option?<CaretDownOutlined />:''
            }
            </div>
        </div>
          {
            option?<Submenu value ={{option,status}}/>:''
          }
      </li>
    </div>
  )


}

export default Navigation;