/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';

AppRegistry.registerComponent(appName, () => Dashboard);
