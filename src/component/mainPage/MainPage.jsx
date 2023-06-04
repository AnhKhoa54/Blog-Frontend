import React from 'react'
import HeadingComponent from './HeadingComponent'
import BodyComponent from './BodyComponent'
import './styles/main-page.scss'

function MainPage() {
  return (
    <div className='main-page-component'>
      <HeadingComponent />
      <BodyComponent />
      <div className='body'></div>
    </div>
  )
}

export default MainPage
