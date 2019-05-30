import React, { Component } from "react";
import { Text, View } from "react-native";

export default class TourList extends Component {
  state = {
    loading: true,
    tours: []
  };

  componentDidMount() {
    fetch("http://192.168.20.116:3000/api/v1/tours")
      .then(res => {
        return res.json();
      })
      .then(json => this.setState({ tours: json, loading: false }))
      .catch(err => this.setState({ loading: false }));
  }

  render() {
    const { loading, tours } = this.state;
    return (
      <React.Fragment>
        {!loading && (
          <View>
            {tours.map((tour, index) => {
              return (
                // <Text key={index}>{JSON.stringify(tour.waypoints[0].lat)}</Text>
                <Text key={index}>{tour.title}</Text>
              );
            })}
          </View>
        )}
      </React.Fragment>
    );
  }
}
