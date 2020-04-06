import React, { useState } from 'react'

function About() {
  const [selected, setSelected] = useState('home')
  console.log(selected)
  return (
    <div className={'item-wrapper'}>
      <a className='navbar-item' href={'#about'} onClick={()=>setSelected('about')}>
        <i className="fas fa-address-card"/>
      </a>
    </div>
  )
}

export default About