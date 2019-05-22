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
      <Title>Mijn clubs</Title>
      <View style={styles.hokjes}>
      <View style={{width: 100, height: 50, backgroundColor: Colors.primaryBrand.light }} />
      <View style={{width: 100, height: 50, backgroundColor: Colors.primaryBrand.light }} />
      <View style={{width: 100, height: 50, backgroundColor: Colors.primaryBrand.light }} />
      </View>
      
      <Text>Club 2</Text>
      <Text>Club 3</Text>


      <Title>Opkomende evenementen</Title>
      <Text>Evenement 1</Text>
      <Text>Evenement 2</Text>

      
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
 
  }

});
