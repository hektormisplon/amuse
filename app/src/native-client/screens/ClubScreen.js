import React from 'react';
import { Text, SubTitle, Title } from '../components/StyledText';
import { Dimensions, StyleSheet, Switch, View, AppRegistry } from 'react-native';
import Colors from '../constants/Colors';
import { SafeAreaView, createAppContainer, createStackNavigator, NavigationEvents } from 'react-navigation';

export default class ClubScreen extends React.Component {
  static navigationOptions = {
    title: 'Clubs',
    header: null,
  };

  render(){
    return (
      
      <SafeAreaView>
      <View style={styles.topContainer}>
        <Switch style={styles.switch}></Switch>
        <Title>Mijn clubs</Title>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <SubTitle style={styles.cardText}>Beeldhouwkunst</SubTitle>
              <Text>28 leden</Text>
          </View>
          <View style={styles.card}>
            <SubTitle style={styles.cardText}>Schilderkunst</SubTitle>

              <Text>28 leden</Text>
          </View>
          <View style={styles.card}>
            <SubTitle style={styles.cardText}>Moderne kunst</SubTitle>
              <Text>28 leden</Text>
          </View>
            {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Agenda')}>   */}
        </View>
        <Title>Opkomende evenementen</Title>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <SubTitle style={styles.cardText}>Evenement 1</SubTitle>
          </View>
          <View style={styles.card}>
            <SubTitle style={styles.cardText}>Evenement 2</SubTitle>
          </View>
          <View style={styles.card}>
            <SubTitle style={styles.cardText}>Evenement 3</SubTitle>     
          </View>
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

  cardContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  card: {
    width: '30%',
    height: '30%',
    backgroundColor: '#333',
  },

  switch: {
    // justifyContent: 'center',
    // marginLeft: 300,
  },

  cardText: {

  },
});
