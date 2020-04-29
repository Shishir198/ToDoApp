// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Todo from './screens/todopage'
// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//       <Todo/>
//     </View>
//   );
// }
import React from 'react';
import { AppLoading } from 'expo';
import Todo from './screens/todopage'
import Task from './screens/tasks'
import { StyleSheet, ScrollView} from 'react-native'
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    const Stack = createStackNavigator();
    return (
      <Container>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <Todo/> */}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="todolist" component={Todo} />
            <Stack.Screen name="tasks" component={Task} />
          </Stack.Navigator>
        </NavigationContainer>
        
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
