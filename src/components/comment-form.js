import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createCommentSelector } from '../selectors'
import { addComment, deleteArticle } from '../ac'

class CommentForm extends Component {
  static propTypes = {}

  state = {
    comment: null,
    user: 'user'
  }

  handleAddCommentClick = () => {
    const { article, addComment } = this.props
    addComment({ comment: { text: this.state.comment, user: this.state.user }, article })
  }

  handleChange = (e) => {
    this.setState({
      comment: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange} />
        <button onClick={this.handleAddCommentClick}>Add comment</button>
      </div>
    )
  }
}

export default connect(
  null,
  { addComment }
)(CommentForm)
