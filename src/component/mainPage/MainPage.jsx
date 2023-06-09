import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeadingComponent from '../Share/HeadingComponent'
import BodyComponent from './BodyComponent'
import './styles/main-page.scss'

function MainPage() {
  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/')
  }
  const navigateWritePage = () => {
    navigate('/new-story')
  }
  return (
    <div className='main-page-component'>
      <HeadingComponent navigateHome={navigateHome} navigateWritePage={navigateWritePage} />
      <BodyComponent />
    </div>
  )
}

export default MainPage
