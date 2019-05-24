import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Text, Title } from '../components/StyledText';
import { Dimensions, StyleSheet, Switch, View, AppRegistry } from 'react-native';
import Colors from '../constants/Colors';
import { SafeAreaView } from 'react-navigation';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    //title: 'Clubs',
    header: null,
  };

  render(){
    return (
      
      <SafeAreaView>
        
      <View style={styles.topContainer}>
      <Switch/>


      <Title>Mijn clubs</Title>
      <View style={styles.hokjes}>
      <Text style={styles.contentHokjes}>Club 1</Text>
      <Text style={styles.contentHokjes}>Club 2</Text>
      <Text style={styles.contentHokjes}>Club 3</Text>
      </View>


      <Title>Opkomende evenementen</Title>
      <View style={styles.hokjes}>
      <Text style={styles.contentHokjes}>Evenement 1</Text>
      <Text style={styles.contentHokjes}>Evenement 2</Text>
      <Text style={styles.contentHokjes}>Evenemnt 3</Text>     
      </View>


      
      </View>
      </SafeAreaView>
    );
  }
  

}

const styles = StyleSheet.create({
  topContainer: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    color: Colors.primaryBrand.light,
  },

  hokjes: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },



  contentHokjes: {
    width: 120, 
    height: 240, 
    backgroundColor: Colors.primaryBrand.light,
    color: 'white',
    justifyContent: 'center',
  },





});
