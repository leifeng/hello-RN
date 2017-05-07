import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation'
import Index from './routes/Index';
import Login from './routes/Login'
const App = StackNavigator({
    Login: { screen: Login },
    Index: { screen: Index }
})

export default App;