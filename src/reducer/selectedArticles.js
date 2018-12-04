import { SELECTED_ARTICLES } from '../constants'

export default (selectedArticlesState = [], action) => {
  const { type, payload } = action
  switch (type) {
    case SELECTED_ARTICLES:
      return payload.selectedArticles
    default:
      return selectedArticlesState
  }
}
