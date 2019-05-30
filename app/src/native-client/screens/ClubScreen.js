import React from "react";
import { Text, SubTitle, Title } from "../components/StyledText";
import { Dimensions, StyleSheet, Switch, View } from "react-native";
import Colors from "../constants/Colors";
import { SafeAreaView } from "react-navigation";
export default class ClubScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView>
        <View style={styles.topContainer}>
          <Switch style={styles.switch} />
          {/*   <Image source={require('../dist/client/static/media/logo.de89e55.svg')} /> */}
          <Title>Mijn clubs</Title>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <SubTitle style={styles.cardText}>
                Beeldhouwkunst {"\n"}
                <Text>28 leden</Text>
              </SubTitle>
            </View>
            <View style={styles.card}>
              <SubTitle style={styles.cardText}>
                Schilderkunst {"\n"}
                <Text>28 leden</Text>
              </SubTitle>
            </View>
            <View style={styles.card}>
              <SubTitle style={styles.cardText}>
                Moderne kunst {"\n"}
                <Text>28 leden</Text>
              </SubTitle>
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
    height: Dimensions.get("window").height,
    //justifyContent: 'center',
    color: Colors.primaryBrand.light,
    justifyContent: "center",
    color: Colors.primaryBrand.dark,
    margin: 20
  },

  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  card: {
    width: "30%",
    height: "30%",
    backgroundColor: Colors.primaryBrand.light,
    borderRadius: 15
  },

  switch: {
    // justifyContent: 'center',
    justifyContent: "center",
    marginLeft: 300
  },

  cardText: {
    color: "white",
    justifyContent: "center"
  }
});