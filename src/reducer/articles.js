import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, SELECTED_ARTICLES, SELECTED_DATE_RANGE } from '../constants'
import { DateUtils } from 'react-day-picker'

export default (
  articlesState = {
    defaultArticles: defaultArticles,
    selectedArticles: null,
    selectedDateRange: { from: null, to: null },
    filterArticles: defaultArticles
  },
  action
) => {
  const { type, payload } = action
  const { defaultArticles, selectedArticles, selectedDateRange, filterArticles } = articlesState
  let newFilterArticles = null
  switch (type) {
    case DELETE_ARTICLE:
      const res = filterArticles.filter((article) => article.id !== payload.id)
      return { defaultArticles, selectedArticles, selectedDateRange, filterArticles: res }

    case SELECTED_ARTICLES:
      newFilterArticles = filter(defaultArticles, payload.selectedArticles, selectedDateRange)
      return {
        defaultArticles,
        selectedArticles: payload.selectedArticles,
        selectedDateRange,
        filterArticles: newFilterArticles
      }

    case SELECTED_DATE_RANGE:
      newFilterArticles = filter(defaultArticles, selectedArticles, payload.selectedDateRange)
      return {
        defaultArticles,
        selectedArticles,
        selectedDateRange: payload.selectedDateRange,
        filterArticles: newFilterArticles
      }

    default:
      return articlesState
  }
}

function filter(articles, selectedArticles, selectedDateRange) {
  let filterArticles = defaultArticles
  if (selectedArticles && selectedArticles.length !== 0) {
    const selectedIds = selectedArticles.map((article) => article.value)
    filterArticles = articles.filter((article) => selectedIds.includes(article.id))
  }
  if (selectedDateRange) {
    filterArticles = filterArticles.filter((article) =>
      DateUtils.isDayInRange(new Date(article.date), selectedDateRange)
    )
  }

  return filterArticles
}
