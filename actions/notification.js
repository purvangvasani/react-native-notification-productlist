import {ADD_NOTIFICATION, UPDATE_NOTIFICATION, EMPTY_NOTIFICATION} from './types'

export const addNotification = (id, name, avatar_url, subtitle, message, isRead) => {
    return {
        type: ADD_NOTIFICATION,
        payload: {id, name, avatar_url, subtitle, message, isRead}
    }
}
export const updateNotification = (id, name, avatar_url, subtitle, message, isRead) => {
    return {
        type: UPDATE_NOTIFICATION,
        payload: {id, name, avatar_url, subtitle, message, isRead}
    }
}
export const emptyNotification = () => {
    return {
        type: EMPTY_NOTIFICATION,
        payload: {}
    }
}