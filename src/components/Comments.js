import React, { Component } from 'react'
import Comment from './Comment'
import OpenCommentsComponent from '../decorators/OpenComments'

class Comments extends Component {
  render() {
    return <ul>{this.comments()}</ul>
  }

  comments() {
    const { comments, isOpen, toggleOpen } = this.props
    return (
      <div>
        <button onClick={toggleOpen}>{isOpen ? 'Close Comments' : 'Open Comments'}</button>
        {isOpen &&
          comments !== undefined &&
          comments.map((comment) => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
      </div>
    )
  }
}

export default OpenCommentsComponent(Comments)
