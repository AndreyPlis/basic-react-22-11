import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../ac'

class CommentForm extends Component {
  static propTypes = {
    article: PropTypes.string.isRequired
  }

  state = {
    comment: null,
    user: 'user'
  }

  handleAddCommentClick = () => {
    const { article, addComment } = this.props
    addComment({ comment: { text: this.state.comment, user: this.state.user }, article })
  }

  handleChangeText = (e) => {
    this.setState({
      comment: e.currentTarget.value
    })
  }

  handleChangeUser = (e) => {
    this.setState({
      user: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        <div>
          <textarea onChange={this.handleChangeText} />
          <textarea onChange={this.handleChangeUser} value={this.state.user} />
        </div>
        <button onClick={this.handleAddCommentClick}>Add comment</button>
      </div>
    )
  }
}

export default connect(
  null,
  { addComment }
)(CommentForm)
