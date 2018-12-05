import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, SELECTED_ARTICLES, SELECTED_DATE_RANGE } from '../constants'
import { DateUtils } from 'react-day-picker'

export default (
  articlesState = {
    articles: defaultArticles,
    selectedArticles: null,
    selectedDateRange: { from: null, to: null },
    filterArticles: defaultArticles
  },
  action
) => {
  const { type, payload } = action
  const { articles, selectedArticles, selectedDateRange } = articlesState
  let filterArticles = null
  switch (type) {
    case DELETE_ARTICLE:
      const res = articlesState.articles.filter((article) => article.id !== payload.id)
      return { articles: res, selectedArticles, selectedDateRange }

    case SELECTED_ARTICLES:
      filterArticles = filter(articles, payload.selectedArticles, selectedDateRange)
      return {
        articles,
        selectedArticles: payload.selectedArticles,
        selectedDateRange,
        filterArticles: filterArticles
      }

    case SELECTED_DATE_RANGE:
      filterArticles = filter(articles, selectedArticles, payload.selectedDateRange)
      return {
        articles,
        selectedArticles,
        selectedDateRange: payload.selectedDateRange,
        filterArticles: filterArticles
      }

    default:
      return articlesState
  }
}

function filter(articles, selectedArticles, selectedDateRange) {
  let filterArticles = defaultArticles
  if (selectedArticles != null && selectedArticles.length !== 0) {
    const selectedIds = selectedArticles.map((article) => article.value)
    filterArticles = articles.filter((article) => selectedIds.includes(article.id))
  }

  /* filterArticles = filterArticles.filter((article) =>
    DateUtils.isDayInRange(article.date, selectedDateRange)
  )*/

  //{(day) => DateUtils.isDayInRange(day, { from, to })}

  return filterArticles
}