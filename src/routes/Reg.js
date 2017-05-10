import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, Dimensions, StatusBar } from 'react-native'
const { height, width } = Dimensions.get('window');
class Reg extends Component {
    constructor() {
        super();
        this.state = {
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
    navToUrl = (url) => {
        const { navigation } = this.props;
        return () => {
            navigation.navigate(url)
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                    translucent={true}
                />
                <Image
                    style={{ flex: 1, width: '100%' }}
                    source={require('../images/login/login_bg.png')}
                >
                    <View style={styles.navBar}>
                        <View style={styles.flex1}></View>
                        <View style={styles.flex1}><Text style={{ color: '#fff', fontSize: 20 }}>注册</Text></View>
                        <View style={[styles.flex1, { alignItems: 'flex-end' }]}>
                            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                                <Text style={{ color: '#fff', fontSize: 16, marginRight: 11 }}>登录</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
                                    placeholder="  手机号"
                                    selectionColor="#24afd7"
                                    placeholderTextColor="#51616f"
                                    underlineColorAndroid="transparent"
                                    onChangeText={this.onChange('username')}
                                    value={this.state.username} />
                            </View>
                            <View style={styles.inputContainer}>
                                <Image
                                    style={styles.icon}
                                    source={require('../images/login/login_input_icon3.png')}
                                />
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={true}
                                    placeholder="  验证码"
                                    selectionColor="#24afd7"
                                    placeholderTextColor="#51616f"
                                    underlineColorAndroid="transparent"
                                    onChangeText={this.onChange('password')}
                                    value={this.state.password} />
                                <TouchableOpacity activeOpacity={0.8}>
                                    <View style={styles.getCode}>
                                        <Text style={{ color: '#fff', fontSize: 14 }}>获取验证码</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.inputContainer}>
                                <Image
                                    style={styles.icon}
                                    source={require('../images/login/login_input_icon2.png')}
                                />
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={true}
                                    placeholder="  输入密码"
                                    selectionColor="#24afd7"
                                    placeholderTextColor="#51616f"
                                    underlineColorAndroid="transparent"
                                    onChangeText={this.onChange('password')}
                                    value={this.state.password} />
                            </View>
                            <View style={styles.inputContainer}>
                                <Image
                                    style={styles.icon}
                                    source={require('../images/login/login_input_icon2.png')}
                                />
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={true}
                                    placeholder="  确认密码"
                                    selectionColor="#24afd7"
                                    placeholderTextColor="#51616f"
                                    underlineColorAndroid="transparent"
                                    onChangeText={this.onChange('password')}
                                    value={this.state.password} />
                            </View>
                            <TouchableOpacity onPress={this.onLogin} activeOpacity={0.8}>
                                <View style={styles.button}>
                                    <Text style={{ color: '#fff', fontSize: 18 }}>提交</Text>
                                </View>
                            </TouchableOpacity>
                        </View>


                    </View>

                </Image>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
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
        padding: 0,
        color: '#3d4961',
        flex: 1,
        marginLeft: 3
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 23,
        height: 45,
        backgroundColor: '#24b0d8'
    },
    code: {
        marginTop: 16,
        color: '#24b0d8',
        textAlign: 'center'
    },
    navBar: {
        flexDirection: 'row',
        marginTop: 10

    },
    flex1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    getCode: {
        width: 120,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 19,
        backgroundColor: '#24b0d8'
    }
})
export default Reg;