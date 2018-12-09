import { normalizedArticles } from '../fixtures'
import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'

const defaultArticles = normalizedArticles.reduce(function(map, article) {
  map[article.id] = article
  return map
}, {})

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action
  const newArticles = { ...articlesState }
  switch (type) {
    case ADD_COMMENT:
      const { article, id } = payload
      newArticles[article].comments.push(id)
      return newArticles
    case DELETE_ARTICLE:
      delete newArticles[payload.id]
      return newArticles

    default:
      return articlesState
  }
}
