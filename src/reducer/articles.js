import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action
  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case FILTER_ARTICLES:
      const a = articlesState.filter((article) => payload.articles.includes(article.id))
      console.log(a)
      return a

    default:
      return articlesState
  }
}
