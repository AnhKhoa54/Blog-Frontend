import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeadingComponent from './HeadingComponent'
import BodyComponent from './BodyComponent'
import './styles/write-post.scss'

function WritePost() {
  const navigate = useNavigate()
  const [value, setValue] = useState('')

  const navigateHome = () => {
    navigate('/')
  }
  const navigateWritePage = () => {
    navigate('/new-story')
  }

  const getValueContext = () => {
    console.log('ANHKHOA', value)
  }
  return (
    <div className='write-post'>
      <HeadingComponent
        navigateHome={navigateHome}
        navigateWritePage={navigateWritePage}
        getValueContext={getValueContext}
      />
      <BodyComponent value={value} setValue={setValue} />
    </div>
  )
}
export default WritePost
