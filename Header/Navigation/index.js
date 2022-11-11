
import React, { useEffect, useRef, useState } from 'react';
import Submenu from '../Submenu';
import { CaretDownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const Navigation = (props) => {
  const value = props.value
  const option = props.listoption
  const refHandle = useRef(null)
  const [handle, setHandle] = useState([])
  const link = props.link
  const subMenuRef = document.getElementsByClassName('nav__link sub__menu')

  useEffect(() => {
    if (refHandle.current ? refHandle.current.className : '') {
      setHandle(props.handle)
    }
  }, [props.handle])

  if (refHandle.current ? refHandle.current.className === 'nav__link sub__menu' : '') {
    refHandle.current.onclick = () => {
      handle.setShowSubmenu(!handle.showSubmenu)
    }
  }
  if (refHandle.current ? refHandle.current.className !== 'nav__link sub__menu' : '') {
    refHandle.current.onclick = () => {
      handle.setShowSubmenu(false)
    }
  }
  if (subMenuRef[1] !== undefined) {
    if (handle.showSubmenu) {
      subMenuRef[1].style.backgroundColor = '#00AEEF'
    } else {
      subMenuRef[1].style.backgroundColor = 'transparent'
    }
  }


  const status = handle.showSubmenu

  return (
    <div>
      <li className={option ? 'nav__link sub__menu' : 'nav__link'} ref={refHandle}>
        <div className='nav__link-content'>
          <Link className="nav__link--href" to={link}>{value}</Link>
          <div className={status ? "list__option-icon list__option-icon--active" : "list__option-icon"}>
            {
              option ? <CaretDownOutlined /> : ''
            }
          </div>
        </div>
        {
          option ? <Submenu value={{ option, status }} /> : ''
        }
      </li>
    </div>
  )


}

export default Navigation;