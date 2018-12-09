import {} from '../constants'
import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_COMMENT:
      commentsState[payload.id] = { ...payload.comment, id: payload.id }
      return commentsState
    default:
      return commentsState
  }
}
