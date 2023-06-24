import React, { useState } from 'react'
import './styles/body-write-page-component.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image', 'video']
  ]
}
function BodyComponent(props) {
  const { value, setValue } = props
  return (
    <div className='body-write-page'>
      <ReactQuill theme='snow' value={value} onChange={setValue} modules={modules} className='write-page-input' />
    </div>
  )
}
export default BodyComponent
