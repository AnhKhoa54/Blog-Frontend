import React, { useRef, useMemo } from 'react'
import './styles/body-write-page-component.scss'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

function BodyComponent(props) {
  const { value, setValue } = props

  const quillRef = useRef()

  const handleInsertImage = () => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.click()

    input.onchange = (e) => {
      const file = e.target.files[0]
      if (file) {
        const formData = new FormData()
        formData.append('image', file)

        const uploadUrl = 'http://35.213.144.20:3000/v1/upload/image'
        fetch(uploadUrl, {
          method: 'POST',
          body: formData
        })
          .then((response) => response.json())
          .then((data) => {
            const quill = quillRef.current.getEditor()
            const range = quill.getSelection(true)
            quill.insertEmbed(range.index, 'image', data.metaData)
            quill.setSelection(range.index + 1)
          })
          .catch((error) => {
            console.error('Image upload failed:', error)
          })
      }
    }
  }

  const modules = useMemo(
    () => ({
      toolbar: {
        handlers: {
          image: handleInsertImage
        },
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ size: [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
          ['link', 'image', 'video']
        ]
      }
    }),
    []
  )

  return (
    <div className='body-write-page'>
      <ReactQuill
        ref={quillRef}
        theme='snow'
        value={value}
        onChange={setValue}
        modules={modules}
        className='write-page-input'
      />
    </div>
  )
}
export default BodyComponent
