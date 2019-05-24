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
      <Switch style={styles.switch}></Switch>


      <Title>Mijn clubs</Title>
      <View style={styles.hokjes}>
      <Text style={styles.contentHokjes}>Beeldhouwkunst {"\n"}
        <Text>28 leden</Text></Text>
      <Text style={styles.contentHokjes}>Schilderkunst {"\n"}
        <Text>28 leden</Text></Text>
      <Text style={styles.contentHokjes}>Moderne kunst {"\n"} 
        <Text>28 leden</Text></Text>
      </View>


      <Title>Opkomende evenementen</Title>
      <View style={styles.hokjes}>
      <Text style={styles.contentHokjes}>Evenement 1</Text>
      <Text style={styles.contentHokjes}>Evenement 2</Text>
      <Text style={styles.contentHokjes}>Evenement 3</Text>     
      </View>


      
      </View>
      </SafeAreaView>
    );
  }
  

}

const styles = StyleSheet.create({
  topContainer: {
    height: Dimensions.get('window').height,
    //justifyContent: 'center',
    color: Colors.primaryBrand.light,
    margin: 20,
  },

  hokjes: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },

  switch: {
    justifyContent: 'center',
    marginLeft: 300,
  },

  contentHokjes: {
    width: 120, 
    height: 240, 
    backgroundColor: Colors.primaryBrand.light,
    color: 'white',
    justifyContent: 'center',
    borderRadius: 15, //werkt niet???
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',


  },

});
