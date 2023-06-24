/* eslint-disable react/prop-types */
import React from 'react'
import './styles/heading-main-page-component.scss'

function HeadingComponent(props) {
  const { navigateHome, navigateWritePage } = props
  return (
    <div className='heading-main-page'>
      <div className='logo-search-component'>
        <div className='logo-component' onClick={navigateHome} aria-hidden='true'>
          <img src='/medium-logo.png' alt='' />
        </div>
        <div className='search-component'>
          <div className='search-icon tag-text'>
            <i className='fal fa-search'></i>
          </div>
          <div className='search-text'>
            <input type='text' placeholder='Search Medium'></input>
          </div>
        </div>
      </div>
      <div className='write-story-component tag-text' onClick={navigateWritePage} aria-hidden='true'>
        <div className='icon'>
          <i className='fal fa-edit'></i>
        </div>
        <div className='text'>Write</div>
      </div>
      <div className='alert-component tag-text'>
        <i className='fal fa-bell'></i>
      </div>
      <div className='account-component'>
        <div className='avatar'>
          <img src='/profile-temp.jpeg' alt='' />
        </div>
        <div className='icon'>
          <i className='fal fa-chevron-down'></i>
        </div>
      </div>
    </div>
  )
}

export default HeadingComponent
