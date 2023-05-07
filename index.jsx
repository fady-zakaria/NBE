/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './src/redux/store';
import {Provider} from 'react-redux';

// Dev Config for Reactotron
if (__DEV__) {
    import('./ReactotronConfig').then(() => {
        // console.log('Reactotron Configured')
    });
}

const RNRedux = ()=>(
    <Provider store={store}>
        <App />
    </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
