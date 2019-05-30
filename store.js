import {combineReducers, createStore} from 'redux'
import notificationReducer from './reducers/notificationReducer'

const rootReducer = combineReducers({
    notification: notificationReducer,
})

const configureStore = () =>{
    return createStore(rootReducer)
}

export default configureStore