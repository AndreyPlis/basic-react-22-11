import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, SELECTED_ARTICLES, SELECTED_DATE_RANGE } from '../constants'
import { DateUtils } from 'react-day-picker'

export default (
  articlesState = {
    defaultArticles: defaultArticles,
    selectedArticles: null,
    selectedDateRange: { from: null, to: null },
    filteredArticles: defaultArticles
  },
  action
) => {
  const { type, payload } = action
  const { defaultArticles, selectedArticles, selectedDateRange, filteredArticles } = articlesState
  let newFilterArticles = null
  switch (type) {
    case DELETE_ARTICLE:
      const res = filteredArticles.filter((article) => article.id !== payload.id)
      return { defaultArticles, selectedArticles, selectedDateRange, filteredArticles: res }

    case SELECTED_ARTICLES:
      newFilterArticles = filter(defaultArticles, payload.selectedArticles, selectedDateRange)
      return {
        defaultArticles,
        selectedArticles: payload.selectedArticles,
        selectedDateRange,
        filteredArticles: newFilterArticles
      }

    case SELECTED_DATE_RANGE:
      newFilterArticles = filter(defaultArticles, selectedArticles, payload.selectedDateRange)
      return {
        defaultArticles,
        selectedArticles,
        selectedDateRange: payload.selectedDateRange,
        filteredArticles: newFilterArticles
      }

    default:
      return articlesState
  }
}

function filter(articles, selectedArticles, selectedDateRange) {
  let filteredArticles = articles
  if (selectedArticles != null && selectedArticles.length !== 0) {
    const selectedIds = selectedArticles.map((article) => article.value)
    filteredArticles = articles.filter((article) => selectedIds.includes(article.id))
  }
  const { from, to } = selectedDateRange
  if (from || to) {
    filteredArticles = filteredArticles.filter((article) =>
      DateUtils.isDayInRange(new Date(article.date), selectedDateRange)
    )
  }

  return filteredArticles
}
