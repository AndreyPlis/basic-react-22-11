import { SELECTED_ARTICLES, DELETE_ARTICLE, INCREMENT } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function selectArticles(selectedArticles) {
  return {
    type: SELECTED_ARTICLES,
    payload: { selectedArticles }
  }
}
