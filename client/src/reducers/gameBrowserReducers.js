import {combineReducers} from 'redux'
import {createReducer} from '../helpers/redux.helpers'

const gameModalReducer = createReducer({ isOpen: false}, {

})

const gameBrowserReducer = combineReducers({
  gameModal: gameModalReducer
})

export default gameBrowserReducer
