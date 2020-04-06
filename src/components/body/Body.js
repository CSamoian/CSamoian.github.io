import React, { useEffect } from 'react'
import Home from './Home'
import About from './About'
import History from './History'
import Contact from './Contact'

function Body(selected) {

  const { home } = Home()
  const { about } = About()
  const { history } = History()
  const { contact } = Contact()

  let renderedBody = home

  if(selected === 'about') {
    renderedBody = about
  }

  if(selected === 'history') {
    renderedBody = history
  }

  if(selected === 'contact') {
    renderedBody = contact
  }

  const body = (
    <div>
      {renderedBody}
    </div>
  )

  return { body }
}

export default Body