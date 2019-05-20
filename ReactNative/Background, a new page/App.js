import React, { Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Weather from "./Weather";

export default class App extends Component {
  state = {
    isLoaded: true
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? <Weather /> : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the weather</Text>
        </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    //justifyContent: 'space-between',
    //alignItems: 'flex-end',
    //flexWrap: 'wrap'
  },
  loading:{
    flex: 1,
    backgroundColor: '#FDF6AA',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText:{
    fontSize: 38,
    marginBottom: 100
  }
});
