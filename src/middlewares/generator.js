import { ADD_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT) {
    action.payload = {
      ...action.payload,
      id: Math.random()
        .toString(36)
        .substring(2, 15)
    }
  }
  next(action)
}
