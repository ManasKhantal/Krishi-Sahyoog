import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './components/About';
import Homestack from './components/Homestack';
import Chatgpt from './components/Chatgpt';
import 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="main" component={Homestack} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Chatgpt" component={Chatgpt} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
