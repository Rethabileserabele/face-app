import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { Fontisto, AntDesign, FontAwesome, MaterialCommunityIcons, Ionicons, Octicons} from '@expo/vector-icons';

export default function App() {
  return (
<View style={styles.direction}>
  <View style={styles.header1}>
  <TouchableOpacity style={styles.backButton}>
  <Ionicons name="ios-chevron-back-outline" size={24} color="white" />
  </TouchableOpacity>
  <View style={styles.searchBox}>
  <Fontisto name="search" size={15} color="white" />
  <Text style={styles.search}>Nkhono</Text>
  </View>
  <TouchableOpacity style={styles.settingsButton}>
  <Octicons name="settings" size={24} color="white" />
  </TouchableOpacity>
  </View>
    <View style={styles.container}>    
      <View style={styles.post}>
        <View style={styles.postBody}>
          <View style={styles.header2}>
            <Image
              style={styles.profilePic}
              source={require('./assets/profile-picture.jpg')}
            />
            <View style={styles.postDetails}>
              <Text style={styles.author}>Nkhono Mantsopa</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.date}>Today</Text>
                <Fontisto name='world-o' size={15} color='#9E9E9E' />
              </View>
            </View>
          </View>
          <View>
            <Text>
              Discover Amazing facts and stories about one of powerful WOMEN 
               of LESOTHO
            </Text>
            <Image
              style={styles.postImage}
              source={require('./assets/SOUTH-AFRICA-MAp.png')}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <AntDesign name='like1' size={24} color='#9E9E9E' />
            <Text style={styles.footerText}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.middleButton}>
              <FontAwesome name="comment" size={24} color='#9E9E9E'/>
              <Text style={styles.middleText}>Comment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.leftButton}>
            <MaterialCommunityIcons name="share" size={24} color='#9E9E9E'/>
            <Text style={styles.leftText}>Share</Text>
            </TouchableOpacity>
        </View>
       </View>
      
    
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'

  },
  header1: {
    marginTop: 20,
    flexDirection: 'row',
    //paddingLeft: 5,
    backgroundColor: '#3D5AFE',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '100%',
    height: '33%',
  },
  direction: {
    // flexDirection: 'column'
  },
  searchBox: {
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#8C9EFF',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '88%',
    height: '50%',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  search_icon: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 5,
  },
  search:{
    padding: 10,
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 5,
    padding: 10,
  },
  backButton: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 5,
  },
  post: {
    marginTop: 2,

    backgroundColor: '#fff',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '100%',
    height: '100%'
  },
  postBody: {
    padding: 10,
  },
  profilePic: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
  },
  postDetails: {

  },
  header2: {
    flexDirection: 'row',
  },
  author: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#9E9E9E',
    marginRight: 5,
    fontSize: 13,
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  footer: {
    flexDirection: 'row',
    height: 40,
    paddingLeft: 10,
    //paddingRight: 10,
    width: '100%',
    backgroundColor: '#ECEFF1',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    alignItems: 'center',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  footerText: {
    marginLeft: 5,
    color: '#9E9E9E',
    fontWeight: 'bold',
  },
  middleButton: {
    marginLeft: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  middleText:{
    marginLeft: 5,
    color: '#9E9E9E',
    fontWeight: 'bold',
    marginRight: 55
  },
  leftButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  leftText: {  
    marginLeft: 5,
    color: '#9E9E9E',
    fontWeight: 'bold',  
  }
});
