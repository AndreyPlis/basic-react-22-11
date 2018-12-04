import { SELECTED_DATE_RANGE, DELETE_ARTICLE, INCREMENT, SELECTED_ARTICLES } from '../constants'

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

export function selectDateRange(selectedDateRange) {
  return {
    type: SELECTED_DATE_RANGE,
    payload: { selectedDateRange }
  }
}
