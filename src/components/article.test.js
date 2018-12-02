import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import articles from '../fixtures'
import Article from './article'

Enzyme.configure({ adapter: new Adapter() })

describe('Article', () => {
  it('should render all comments closed by default', () => {
    const container = render(<Article article={articles[0]} />)

    expect(container.find('.test__comment-list--body').length).toEqual(0)
  })

  it('should open comments on click', () => {
    const container = mount(
      <Article article={articles[0]} isOpen={true} toggleOpen={() => () => {}} />
    )
    expect(container.find('.test__comment-list--item').length).toEqual(0)

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(container.find('.test__comment-list--item').length).toEqual(articles[0].comments.length)
  })

  it('should open No comments yet', () => {
    const container = mount(
      <Article article={articles[articles.length - 1]} isOpen={true} toggleOpen={() => () => {}} />
    )
    expect(container.find('.test__comment-list--item').length).toEqual(0)

    container
      .find('.test__comment-list--btn')
      .at(0)
      .simulate('click')

    expect(
      container
        .find('h3')
        .at(1)
        .prop('children')
    ).toEqual('No comments yet')
  })
})
