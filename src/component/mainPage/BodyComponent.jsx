import React from 'react'
import TopicFollowedComponent from './TopicFollowedComponent'
import './styles/body-component.scss'

function BodyComponent() {
  return (
    <div className='body'>
      <div className='main-content'>
        <TopicFollowedComponent />
      </div>
      <div className='sub-content'></div>
    </div>
  )
}

export default BodyComponent
