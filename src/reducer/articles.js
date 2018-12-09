import { normalizedArticles } from '../fixtures'
import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'

const defaultArticles = normalizedArticles.reduce(function(map, article) {
  map[article.id] = article
  return map
}, {})

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_COMMENT:
      const { article, id } = payload
      const newArticles = { ...articlesState }
      newArticles[article].comments.push(id)
      return newArticles
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    default:
      return articlesState
  }
}
