import {AppRegistry} from 'react-native';
import App from '../App'; // Fixed relative path
import {name} from './app.json'; // Fixed relative path

AppRegistry.registerComponent(name, () => App);

AppRegistry.runApplication(name, {
  rootTag: document.getElementById('root'),
});
