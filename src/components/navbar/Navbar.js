import React,{ Component, useState } from 'react'
import './navbar.css'

function Navbar(sendSelected) {

  const [selected, setSelected] = useState('home')

  const navbar = (
    <div className={'navbar'}>
      <div className={'item-wrapper'}>
        <a className='navbar-item' href={'#home'} onClick={()=>setSelected('home')}>
          <i className="fas fa-home"/>
        </a>
      </div>
      <div className={'item-wrapper'}>
        <a className='navbar-item' href={'#about'} onClick={()=>setSelected('about')}>
          <i className="fas fa-address-card"/>
        </a>
      </div>
      <div className={'item-wrapper'}>
        <a className='navbar-item' href={'#history'} onClick={()=>setSelected('history')}>
          <i className="fas fa-history"/>
        </a>
      </div>
      <div className={'item-wrapper'}>
        <a className='navbar-item' href={'#contact'} onClick={()=>setSelected('contact')}>
          <i className="fas fa-envelope"/>
        </a>
      </div>
    </div>
  )

  return {selected, navbar}
}

export default Navbar;
