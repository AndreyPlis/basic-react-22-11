import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import selectedArticles from './selectedArticles'
import selectedDateRange from './selectedDateRange'

export default combineReducers({
  counter: counterReducer,
  articles,
  selectedArticles,
  selectedDateRange
})
