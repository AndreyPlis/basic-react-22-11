import { DELETE_ARTICLE, FILTER_ARTICLES, INCREMENT } from '../constants'

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

export function filterArticles(articles) {
  console.log(articles)
  return {
    type: FILTER_ARTICLES,
    payload: { articles }
  }
}
