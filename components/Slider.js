
import React, { Component } from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet} from 'react-native';
import {images} from '../shared/ImageData';

const {width} = Dimensions.get("window");
const height = width * 0.7;

export default class Slider extends Component {
  state ={
    active: 0,
    images: images
  }

  change= ({nativeEvent}) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== this.state.active){
      this.setState({active: slide});
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <ScrollView 
      pagingEnabled 
      horizontal
      onScroll={this.change}
      showsHorizontalScrollIndicator={false} 
      style={styles.scroll}>
      {
        images.map((image,index) => (
          <Image
          key={index}
        source={{uri:image}}
        style={styles.image} />
        ))
      }
      </ScrollView>
      <View style={styles.pagination}>
      {
        images.map((i,k) => (
          <Text key={k} style={k==this.state.active? styles.pageActiveText: styles.pageText}>⬤</Text>
        ))
      }
      </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {
    marginTop: 50, 
    width, 
    height
  },
  scoll: {
    width, 
    height
  },
  image: {
    width, 
    height, 
    resizeMode:'cover'
  },
  pagination:{
    flexDirection:'row', 
    position:'absolute', 
    bottom:0, 
    alignSelf:'center'
  },
  pageText:{
    color:'#888',
    margin: 3,
    fontSize: (width / 30),
  },
  pageActiveText:{
    color:'#fff',
    margin: 3,
    fontSize: (width / 30),
  },
});
