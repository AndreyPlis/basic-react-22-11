import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import generator from '../middlewares/generator'

const enhancer = applyMiddleware(logger, generator)

const store = createStore(reducer, enhancer)

//dev only!!!!
window.store = store

export default store
