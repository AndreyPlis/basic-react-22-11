import React, { Component } from 'react'
import Comment from './Comment'
import accordion from '../decorators/accordion'

export default class Comments extends Component {
  state = {
    openItemId: false
  }

  handle = () => {
    this.setState((state) => {
      return {
        openItemId: !state.openItemId
      }
    })
  }

  render() {
    return <ul>{this.comments()}</ul>
  }

  comments() {
    const { comments } = this.props
    if (comments === undefined) {
      return null
    }
    return (
      <div>
        <button onClick={this.handle}>{this.state.openItemId ? 'close' : 'open'}</button>
        {this.state.openItemId &&
          comments.map((comment) => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
      </div>
    )
  }
}
