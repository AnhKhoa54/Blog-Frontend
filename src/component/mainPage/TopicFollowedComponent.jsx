import React, { useRef } from 'react'
import './styles/topic-followed-component.scss'
const listTopic = [
  'GIS',
  'Relationship',
  'Self',
  'Mental Health',
  'Future',
  'World',
  'Family',
  'Software Engineer',
  'Space',
  'Climate Change',
  'Data Science'
]
const sideScroll = (element, speed, distance, step) => {
  let scrollAmount = 0
  const slideTimer = setInterval(() => {
    element.scrollLeft += step
    scrollAmount += Math.abs(step)
    if (scrollAmount >= distance) {
      clearInterval(slideTimer)
    }
  }, speed)
}

function TopicFollowedComponent() {
  const topicWrapper = useRef(null)

  return (
    <div className='topic-followed-component tag-text'>
      <div
        className='arrow'
        onClick={() => {
          sideScroll(topicWrapper.current, 25, 50, -10)
        }}
        aria-hidden='true'
      >
        <i className='fal fa-chevron-left'></i>
      </div>
      <div className='content-wrapper' ref={topicWrapper}>
        {listTopic.map((element, index) => {
          return (
            <div className='content' key={index}>
              {element}
            </div>
          )
        })}
      </div>
      <div
        className='arrow'
        onClick={() => {
          sideScroll(topicWrapper.current, 25, 50, 10)
        }}
        aria-hidden='true'
      >
        <i className='fal fa-chevron-right'></i>
      </div>
    </div>
  )
}

export default TopicFollowedComponent
