import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { changeSelection } from '../../ac'
import { articlesSelector, selectedArticlesSelector } from '../../selectors'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.object
  }

  handleChange = (selected) => {
    this.props.changeSelection(selected)
  }

  get options() {
    return Object.keys(this.props.articles).map((key) => ({
      label: this.props.articles[key].title,
      value: key
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    selected: selectedArticlesSelector(state),
    articles: articlesSelector(state)
  }),
  { changeSelection }
)(SelectFilter)
