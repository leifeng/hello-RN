import React, { Component } from 'react';
import { Text, View, Button } from 'react-native'
class Login extends Component {
    static navigationOptions = {
        header: null
    }
    onLogin = () => {
        const { navigation } = this.props;
        navigation.navigate('Index')
    }
    render() {
        return (
            <View>
                <Text>Login</Text>
                <Button title="首页"
                    onPress={this.onLogin} />
            </View>
        )
    }
}

export default Login;