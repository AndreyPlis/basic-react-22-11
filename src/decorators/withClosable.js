import React from 'react'

export default (OriginalComponent) =>
  class OpenCommentsComponent extends React.Component {
    state = {
      isOpen: false
    }

    toggleOpen = () => {
      this.setState((state) => {
        return {
          isOpen: !state.isOpen
        }
      })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggleOpen={this.toggleOpen}
        />
      )
    }
  }
