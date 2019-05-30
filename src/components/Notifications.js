import React, { Component } from 'react'
import { View, TouchableHighlight, TouchableWithoutFeedback, RefreshControl, ScrollView, Text } from 'react-native'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/Entypo'
import {list} from '../constants/notificationList'
import { Thumbnail, Grid, Col } from 'native-base';
import {addNotification, emptyNotification, updateNotification} from '../../actions/notification'
import theme from '../../Theme/theme';

class Notifications extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // isLoading: true,
            notifications: [],
            isRead: false,
            refreshing: false
        };
    };

    _onRefresh = () => {
        this.setState({refreshing: true});
        
        this.props.empty()
        
        this.getNotifications()
        
        this.setState({refreshing: false})
    }

    componentWillMount() {
        this.getNotifications();
    }

    getNotifications() {
        for (let i = 0; i < list.length; ++i) {
            this.state.notifications.push(list[i]);
            this.props.addNotif(list[i].id, list[i].name, list[i].avatar_url, list[i].subtitle, list[i].message,  list[i].isRead)
        }
    }

    handleClick = (id) => {
        for (let i = 0; i < this.props.prod.notification.length; ++i) {
            if(this.state.notifications[i].id === id){
                this.props.update(this.props.prod.notification[i].id, this.props.prod.notification[i].name, this.props.prod.notification[i].avatar_url, this.props.prod.notification[i].subtitle, this.props.prod.notification[i].message, 'white')
            }
        }
    }

    renderItem = () => {
        return this.props.prod.notification.map((item, key) =>
            <View key={key}>
                <TouchableWithoutFeedback onPress={this.handleClick.bind(this, item.id)}>
                <Grid  style={[theme.notificationGrid,{backgroundColor: item.isRead}]}>
                    <Col size={15}>
                        <Thumbnail source = {{uri: item.avatar_url}} style={theme.thumbnail} />
                    </Col>
                    <Col size={80}>
                        <Text style={theme.notificationText}>{item.name+ " " +item.message}</Text>
                    </Col>
                    <Col size={5}>
                        <TouchableHighlight>
                            <Icon name="chevron-small-right" style={theme.notificationMoreIcon} />
                        </TouchableHighlight>
                    </Col>
                </Grid>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh} />
            }>
                {this.renderItem()}
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    return {
        prod: state.notification
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        addNotif: (id, name, avatar_url, subtitle, message, isRead) => {  
            dispatch(addNotification(id, name, avatar_url, subtitle, message, isRead))
        },
        empty: () => {   
            dispatch(emptyNotification())
        },
        update: (id, name, avatar_url, subtitle, message, isRead) => {   
            dispatch(updateNotification(id, name, avatar_url, subtitle, message, isRead))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)