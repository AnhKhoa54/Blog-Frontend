import React from 'react'
import './styles/body-show-post-page.scss'
import { Parser } from 'html-to-react'
import useApi from '../helper/request'
// import useApi from '../helper/useApi'
const showPostContext = (postContext) => {
  if (postContext.data === null) return

  let context = postContext.data.metaData.metadata.postData.content
  return context
}
function BodyComponent() {
  const parser = new Parser()
  const postContext = useApi('http://35.213.144.20:3000/post/6d41c0e4-a5b9-4fbf-a2a0-d2f3f3160f99')
  let context = showPostContext(postContext)
  const reactComponent = parser.parse(context)

  return <div className='body-show-post-page'>{reactComponent}</div>
}

export default BodyComponent
