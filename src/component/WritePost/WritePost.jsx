import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeadingComponent from './HeadingComponent'
import BodyComponent from './BodyComponent'
import './styles/write-post.scss'

function WritePost() {
  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/')
  }
  const navigateWritePage = () => {
    navigate('/new-story')
  }
  return (
    <div className='write-post'>
      <HeadingComponent navigateHome={navigateHome} navigateWritePage={navigateWritePage} />
      <BodyComponent />
    </div>
  )
}
export default WritePost
