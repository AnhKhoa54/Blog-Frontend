import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeadingComponent from '../Share/HeadingComponent'
import BodyComponent from './BodyComponent'
import './styles/show-post.scss'

function ShowPost() {
  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/')
  }
  const navigateWritePage = () => {
    navigate('/new-story')
  }
  return (
    <div className='show-post-page-component'>
      <HeadingComponent navigateHome={navigateHome} navigateWritePage={navigateWritePage} />
      <BodyComponent />
    </div>
  )
}

export default ShowPost
