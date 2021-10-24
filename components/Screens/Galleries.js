import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  FlatList,
} from 'react-native';

export default class Galleries extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  image:require("../Images/1.png")},
        {id:2,  image:require("../Images/2.jpg")} ,
        {id:3,  image:require("../Images/3.png")}, 
        {id:4,  image:require("../Images/4.png")}, 
        {id:5,  image:require("../Images/5.png")}, 
        {id:6,  image:require("../Images/6.png")}, 
        {id:7,  image:require("../Images/7.png")}, 
        {id:8,  image:require("../Images/8.jpg")},
        {id:9,  image:require("../Images/9.jpg")},
        {id:10, image:require("../Images/10.png")},
      ]
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item.image;
            return (
              <View style={styles.card}>
                <Image style={styles.cardImage} source={item}/>
              </View>
            )
          }}/>
      </View>
    );
  }
}

//Move to global styles later on
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#eee"
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 5,
  },
  /******** card **************/
  card:{
    marginVertical: 8,
    flexBasis: '47%',
    marginHorizontal: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  icon: {
    width:25,
    height:25,
  },
}); 