import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
// import { reducerName } from './reducer'

const reducer = combineReducers({
  form: formReducer
})

const store = createStore(reducer)

export default store