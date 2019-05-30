import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, FlatList, RefreshControl, ActivityIndicator, TouchableNativeFeedback } from 'react-native'
import { Card, CardItem, Grid, Col, Button, Spinner } from 'native-base';
import Icon from 'react-native-vector-icons/Foundation'
import {InfiniteScrollAPI} from '../constants/api'

class Products extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            color: 'lightgrey',
            data : [],
            page : 1,
            isLoading : false,
        }
    }
    
    componentDidMount(){
        this.setState({
            isLoading:true
        },this.getData)
    }

    getData = () =>{
        const url =`${InfiniteScrollAPI}` +this.state.page;
        fetch(url).then((response) => response.json())
            .then((responseJson) => (
            this.setState({
                // data:responseJson
                data : this.state.data.concat(responseJson),
                isLoading:false
            })   
        ))
    }

    handleLoadMore = () => {
        this.setState(
            {page : this.state.page + 1, isLoading:true}
                ,this.getData,
        )
    }

    renderRaw=({item})=>{
        let title = item.title.slice(0, 15);
        return(<Card style={{marginBottom: 10,}}>
                <CardItem>
                    <Grid>
                        <Col size={25} >
                            <Image source={require('../images/realmeC2.jpeg')}  />                    
                        </Col>
                        <Col size={75}>
                            <View style={{paddingLeft: 25}}>
                                <Grid>
                                    <Col size={75}>
                                        <Text style={{fontSize: 14, fontWeight: 'bold',}}>{title}</Text>
                                    </Col>
                                    <Col size={25}>
                                        <Text style={{fontSize: 16,  }}>{'\u20B9'}11,999</Text>    
                                    </Col>
                                </Grid>
                                <Grid style={{paddingTop: 15}}>
                                    <Col size={20}>
                                        <View style={{backgroundColor: 'green', borderRadius: 115}}>
                                            <Text style={{fontSize: 14, color: 'white', textAlign: 'center'}}>4.5 <Icon name="star" color={'white'}  style={{fontSize: 14}} /></Text>
                                        </View>
                                    </Col>
                                    <Col size={60}>
                                        <Text style={{paddingLeft: 10}}>(12,34)</Text>
                                    </Col>
                                    <Col size={20}>
                                        <View>
                                            <TouchableNativeFeedback onPress={this.handleInfo.bind(this, item.title)}>
                                                <Icon name="info" style={{fontSize: 26, color: 'blue'}} />
                                            </TouchableNativeFeedback>
                                        </View>
                                    </Col>
                                </Grid>
                                <Grid style={{paddingTop: 30}}>
                                    <Col size={100}>
                                        <Button block small dark>
                                            <Text style={{fontWeight: 'normal', color: 'white', fontSize: 14}}>Know more</Text>
                                        </Button>
                                    </Col>
                                </Grid>
                            </View>
                        </Col>
                    </Grid>
                </CardItem>
                <CardItem  style={{borderTopWidth: 1, borderColor: 'grey',}}>
                    <Grid>
                        <Col size={15}>
                            <View style={{backgroundColor: 'lightgrey', width: 40, height: 40, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 30,}}>
                                <Text style={{fontSize: 26, fontWeight: 'bold', textAlign: 'center'}}>{item.title[0]}</Text>
                            </View>
                        </Col>
                        <Col size={70}>
                             <View style={{paddingLeft: 25}}>
                                <Text style={{fontSize: 18, fontWeight: 'bold',}}>{title}</Text>
                                <Text>{item.subtitle}</Text>
                            </View>
                        </Col>
                        <Col size={15}>
                            <View style={{ backgroundColor: 'white', width: 45, height: 45, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 30,}}> 
                            <TouchableOpacity onPress={this.handleFavorite.bind(this, item.id)}>
                                <Icon name="heart" color={this.state.color} style={{fontSize: 24, textAlign: 'center', paddingTop: 10}}/>
                            </TouchableOpacity>
                            </View>
                        </Col>
                    </Grid>
                </CardItem>
            </Card>
        )
    }

    handleInfo(value){
        alert(value)
    }

    handleFavorite(value){
       alert('item '+value+ ' marked as favorite.')
    }

    renderFooter = () => {
        return(
            this.state.isLoading 
            ?
            <View>
                <ActivityIndicator size="large"/>
            </View> 
            : <Spinner />
        )
    }

    render() {
        return (
                <FlatList 
                    data={this.state.data}  
                    renderItem={this.renderRaw} 
                    keyExtractor={(item,index) => 'key'+index} 
                    onEndReachedThreshold = {16} 
                    onEndReached={this.handleLoadMore}
                    ListFooterComponent = {this.renderFooter}
                />
        )
    }
}

export default Products