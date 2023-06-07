import React from 'react'
import './styles/list-post-component.scss'
const grayText = {
  color: 'rgba(117, 117, 117, 1)'
}
function ListPosstComponent() {
  return (
    <div className='list-post-component'>
      <div className='content'>
        <div className='author-publish'>
          <img src='/profile-temp.jpeg' alt='' />
          <span className='context-text'>Kioku</span>
          <span className='context-text' style={grayText}>
            in
          </span>
          <span className='context-text'>GIS</span>
          <i className='fas fa-circle'></i>
          <span className='context-text' style={grayText}>
            4 hour ago
          </span>
        </div>
        <div className='information title-text'>What Is Geographic Information System (GIS)</div>
        <div className='information tag-text'>
          Everything you need to know about GIS, it's basic working, role in engineering and its applications. —
          Geographic Information System is nothing but a computer application that captures, stores and displays...
        </div>
        <div className='footer'>
          <div className='for-post tag-text'>
            <div className='tag'>GIS</div>
            <div className='time-read tag-text'>13 min read</div>
          </div>
          <div className='for-user'>
            <div className='save'>
              <i className='fal fa-layer-plus'></i>
            </div>
          </div>
        </div>
      </div>
      <div className='image'>
        <img src='/profile-temp.jpeg' alt='' />
      </div>
    </div>
  )
}

export default ListPosstComponent
