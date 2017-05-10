import { StackNavigator } from 'react-navigation'
import Index from './routes/Index';
import Login from './routes/Login';
import LoginForCode from './routes/LoginForCode';
import Reg from './routes/Reg';

const App = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    LoginForCode: {
        screen: LoginForCode,
        navigationOptions: {
            header: null
        }
    },
    Reg: {
        screen: Reg,
        navigationOptions: {
            header: null
        }
    },
    Index: {
        screen: Index,
        navigationOptions: {
            header: null
        }
    }
})

export default App;