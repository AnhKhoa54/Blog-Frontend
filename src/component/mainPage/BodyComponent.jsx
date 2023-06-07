import React from 'react'
import TopicFollowedComponent from './TopicFollowedComponent'
import ListPostComponent from './ListPostComponent'
import './styles/body-component.scss'

function BodyComponent() {
  return (
    <div className='body'>
      <div className='main-content'>
        <TopicFollowedComponent />
        <ListPostComponent />
        <ListPostComponent />
        <ListPostComponent />
      </div>
      <div className='sub-content'></div>
    </div>
  )
}

export default BodyComponent
