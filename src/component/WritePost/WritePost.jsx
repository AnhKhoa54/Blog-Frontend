import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeadingComponent from './HeadingComponent'
import BodyComponent from './BodyComponent'
import './styles/write-post.scss'
import axios from 'axios'

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
    axios
      .post(
        'http://35.213.144.20:3000/post/posting',
        {
          'post-title': 'Vu Anh Khoa',
          'post-status': 'publish',
          'post-permit': 'private',
          'post-category': 'tech',
          'post-content': value
        },
        {
          headers: { 'x-client-id': 'a2997563-126c-11ee-bd2d-0242ac140002' }
        }
      )
      .then((response) => {
        console.log('ANHKHOA res', response)
      })
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
