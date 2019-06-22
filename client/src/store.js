import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import gameBrowserReducer from './reducers/gameBrowserReducers'


const rootReducer = combineReducers({
  gameBrowser: gameBrowserReducer
})

const store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(
      thunkMiddleware
    )
  )
)

export default store;
