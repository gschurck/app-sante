import React,  { Component } from 'react'
import { View, Text, Button} from 'react-native'
/*
const Home = (props) => {
  return (
    <View>
      <Text>ok</Text>
      <Button
        title="Go to Blog"
        onPress={() => this.props.navigation.navigate('Login')}
      />
    </View>
  );
};
*/

class Home extends Component {
  render() {
    return (
        <View>
            <Text>ok</Text>
                    <Button
          title="Go to Blog"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        </View>
    );
  }
}

export default Home;