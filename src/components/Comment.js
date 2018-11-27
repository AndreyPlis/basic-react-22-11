import React from 'react'

function Comment(props) {
  const { comment } = props
  return (
    <div>
      <h3>{comment.user}</h3>
      <section>{comment.text}</section>
    </div>
  )
}

export default Comment
