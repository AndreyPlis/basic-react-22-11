import React, { Component } from 'react'
import Select from 'react-select'
import connect from 'react-redux/es/connect/connect'
import { selectArticles } from '../../ac'

class SelectFilter extends Component {
  handleChange = (selected) => {
    this.props.selectArticles(selected)
  }

  get options() {
    return this.props.articles.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selectedArticles}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles,
    selectedArticles: state.selectedArticles
  }),
  { selectArticles: selectArticles }
)(SelectFilter)
