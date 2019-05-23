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
      <View style={styles.hokjesHorizontaal}>
      <Text style={styles.contentHokjes}>Club 1</Text>
      <Text style={styles.contentHokjes}>Club 2</Text>
      <Text style={styles.contentHokjes}>Club 3</Text>
      </View>


      <Title>Opkomende evenementen</Title>
      <View style={styles.hokjesVerticaal}>
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

  hokjesHorizontaal: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  hokjesVerticaal: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  contentHokjes: {
    width: 100, 
    height: 50, 
    backgroundColor: Colors.primaryBrand.light,
  }



});
