import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, Animated } from 'react-native'
class Login extends Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super();
        this.state = {
            fadeAnim: new Animated.Value(0),
            username: '',
            password: ''
        }
    }
    onLogin = () => {
        const { navigation } = this.props;
        navigation.navigate('Index')
    }
    onChange = (name) => {
        return txt => {
            this.setState({ [name]: txt })
        }
    }
    render() {
        return (

            <View style={styles.container}>
                <Image
                    style={{ flex: 1, width: '100%' }}
                    source={require('../images/login/login_bg.png')}
                >
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../images/login/login_logo.png')}
                        />
                    </View>
                    <View style={styles.loginContainer}>
                        <View style={styles.forms}>
                            <View style={styles.inputContainer}>
                                <Image
                                    style={styles.icon}
                                    source={require('../images/login/login_input_icon1.png')}
                                />
                                <TextInput
                                    style={styles.input}
                                    keyboardType={"numeric"}
                                    placeholder="用户名"
                                    selectionColor="#24afd7"
                                    placeholderTextColor="#51616f"
                                    underlineColorAndroid="transparent"
                                    onChangeText={this.onChange('username')}
                                    value={this.state.username} />
                            </View>
                            <View style={styles.inputContainer}>
                                <Image
                                    style={styles.icon}
                                    source={require('../images/login/login_input_icon2.png')}
                                />
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={true}
                                    placeholder="密码"
                                    selectionColor="#24afd7"
                                    placeholderTextColor="#51616f"
                                    underlineColorAndroid="transparent"
                                    onChangeText={this.onChange('password')}
                                    value={this.state.password} />
                            </View>

                            <TouchableOpacity onPress={this.onLogin}>
                                <View style={styles.button}>
                                    <Text style={{ color: '#fff', fontSize: 18 }}>登录</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                    </View>
                </Image>
            </View>

        )
    }
    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            { toValue: 1 }
        ).start()
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginContainer: {
        flex: 2,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 23,
        height: 45,
        marginBottom: 30,
        borderColor: '#3d4961'
    },
    logo: {
        width: 86,
        height: 86,
    },
    forms: {
        marginLeft: 35,
        marginRight: 35,

    },
    icon: {
        height: 45,
        width: 46,
    },
    input: {
        color: '#fff',
        flex: 1,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 23,
        height: 45,
        backgroundColor: '#24b0d8'
    }

})
export default Login;