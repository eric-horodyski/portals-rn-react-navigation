import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { initialize } from './initialize';

AppRegistry.registerRunnable(appName, async props => {
  await initialize();
  AppRegistry.registerComponent(appName, () => App);
  AppRegistry.runApplication(appName, props);
});



