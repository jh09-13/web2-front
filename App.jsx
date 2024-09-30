import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreenComponent from './SplashScreenComponent';  // 스플래시 화면 import
import Experiment1 from './experiments/Experiments1';  // 실험실 1 import
import Experiment2 from './experiments/Experiments2';  // 실험실 2 import
import Experiment3 from './experiments/Experiments3';  // 실험실 3 import


const Stack = createStackNavigator();

// 실험실 선택 화면
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>실험실 선택 화면</Text>
      
      <Button
        title="실험실 1로 이동"
        onPress={() => navigation.navigate('Experiment1')}
      />
      
      <Button
        title="실험실 2로 이동"
        onPress={() => navigation.navigate('Experiment2')}
      />

      <Button
        title="실험실 3로 이동"
        onPress={() => navigation.navigate('Experiment3')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* 스플래시 화면 */}
        <Stack.Screen 
          name="Splash" 
          component={SplashScreenComponent} 
          options={{ headerShown: false }}  // 스플래시 화면에서는 헤더를 숨깁니다
        />
        
        {/* 실험실 선택 화면 */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }}  // 실험실 선택 화면에서 헤더 숨기기
        />
        
        {/* 실험실 화면들 */}
        <Stack.Screen name="Experiment1" component={Experiment1} />
        <Stack.Screen name="Experiment2" component={Experiment2} />
        <Stack.Screen name="Experiment3" component={Experiment3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
