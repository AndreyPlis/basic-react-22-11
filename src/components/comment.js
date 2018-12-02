import React from 'react'
import PropTypes from 'prop-types'
import Article from './article'

function Comment({ comment }) {
  return (
    <div>
      {comment.text} <b>by {comment.user}</b>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object
}

export default Comment
