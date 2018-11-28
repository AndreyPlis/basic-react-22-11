import React from 'react'
import Comments from './Comments'
function Article(props) {
  const { article, isOpen, toggleOpen } = props
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
      {getBody(props)}
    </div>
  )
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null
  const { comments } = article
  return (
    <section>
      {article.text}
      <Comments comments={comments} />
    </section>
  )
}

export default Article
