import {ADD_NOTIFICATION} from '../actions/types'
import {EMPTY_NOTIFICATION} from '../actions/types'
import {UPDATE_NOTIFICATION} from '../actions/types'

const initialState = {
    id: '',
    name: '',
    avatar_url: '',
    subtitle: '',
    message: '',
    isRead: '',
    notification: [],
}

const notificationReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_NOTIFICATION:
            return Object.assign({}, state, {
                notification: state.notification.concat({
                    key: new Date(),
                    id: action.payload.id,
                    name: action.payload.name,
                    avatar_url: action.payload.avatar_url,
                    subtitle: action.payload.subtitle,
                    message: action.payload.message,
                    isRead: action.payload.isRead,
                })
            })
        case UPDATE_NOTIFICATION:
            return Object.assign({}, state, { 
                notification: state.notification.map((user)=>{ 
                    if(user.id === action.payload.id) {       
                        return {
                            ...user,
                            isRead: action.payload.isRead
                        }
                    } else return user
                })
            })
        case EMPTY_NOTIFICATION:
            return initialState
        default:
            return state
    }
}


export default notificationReducer