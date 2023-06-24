/* eslint-disable react/prop-types */
import React from 'react'
import './styles/heading-write-page-component.scss'

function HeadingComponent(props) {
  const { navigateHome, getValueContext } = props
  return (
    <div className='heading-write-page'>
      <div className='logo-component'>
        <div className='logo' onClick={navigateHome} aria-hidden='true'>
          <img src='/medium-logo.png' alt='' />
        </div>
        <div className='text tag-text'>Draf in Anh Khoa Vu</div>
        <div className='text tag-text'>Saved</div>
      </div>
      <div className='other-component' onClick={getValueContext} aria-hidden='true'>
        <div className='publish-component tag-text'>publish</div>
        <div className='expand-component tag-text'>
          <i className='fas fa-ellipsis-h'></i>
        </div>
        <div className='alert-component tag-text'>
          <i className='fal fa-bell'></i>
        </div>
        <div className='acount-component'>
          <img src='/profile-temp.jpeg' alt='' />
        </div>
      </div>
    </div>
  )
}
export default HeadingComponent
