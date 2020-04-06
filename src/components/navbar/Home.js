import React, { useState } from 'react'

function Home(){
  const [selected, setSelected] = useState('home')
  console.log(selected)
  return (
    <div className={'item-wrapper'}>
      <a className='navbar-item' href={'#home'} onClick={()=>setSelected('home')}>
        <i className="fas fa-home"/>
      </a>
    </div>
  )
}

export default Home