import React, {useCallback, useRef} from 'react';
import {StyleSheet, EmitterSubscription} from 'react-native';
import {Portal, PortalView, subscribe} from '@ionic/portals-react-native';
import {NavigationContainer, useFocusEffect} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const portal: Portal = {name: 'debug', startDir: 'debug'};

const PortalScreen = ({route, navigation}) => {
  const {next} = route.params;
  const ref = useRef<EmitterSubscription | null>(null);

  useFocusEffect(
    useCallback(() => {
      ref.current = subscribe('debug', () => navigation.push(next));
      return () => ref.current?.remove();
    }, [navigation, next]),
  );

  return <PortalView portal={portal} style={[styles.flex]} />;
};

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={PortalScreen}
          initialParams={{next: 'Details'}}
        />
        <Stack.Screen
          name="Details"
          component={PortalScreen}
          initialParams={{next: 'Home'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
});

export default App;
