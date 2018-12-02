import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
  static defaultProps = {
    label: 'Username'
  }

  state = {
    username: ''
  }

  static propTypes = {
    label: PropTypes.string
  }

  handleUserChange = (ev) => {
    if (ev.target.value.length > 10)
      return this.setState({
        username: ''
      })

    this.setState({
      username: ev.target.value
    })
  }

  render() {
    return (
      <div>
        {this.props.label}: <input value={this.state.username} onChange={this.handleUserChange} />
      </div>
    )
  }
}

export default UserForm
