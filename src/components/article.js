import React from 'react'
import Comments from './Comments'
function Article(props) {
  const { article, isOpen, toggleOpen } = props
  const { comments } = article
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
      {getBody(props)}
      {isOpen && <Comments comments={comments} />}
    </div>
  )
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null

  return <section>{article.text}</section>
}

export default Article
