import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions,BackHandler } from 'react-native'
const { height, width } = Dimensions.get('window');


class Index extends Component {
    static defaultProps = {
        items: [
            { name: '爱车', nor: require('../images/menu/menu_icon1_nor.png'), down: require('../images/menu/menu_icon1_down.png') },
            { name: '发现', nor: require('../images/menu/menu_icon2_nor.png'), down: require('../images/menu/menu_icon2_down.png') },
            { name: '车生活', nor: require('../images/menu/menu_icon3_nor.png'), down: require('../images/menu/menu_icon3_down.png') },
            { name: '我的', nor: require('../images/menu/menu_icon4_nor.png'), down: require('../images/menu/menu_icon4_down.png') },
        ]
    }
    state = {
        selectIndex: 0
    }
    tabbarChange = (index) => {
        return () => {
            this.setState({ selectIndex: index })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pageView}></View>
                <View style={styles.tabbar}>
                    {this.props.items.map((item, index) => {
                        const icon = this.state.selectIndex === index ? item.down : item.nor;
                        return <View style={styles.tabbarItem} key={index}>
                            <TouchableOpacity onPress={this.tabbarChange(index)} activeOpacity={0.8}>
                                <View>
                                    <Image style={styles.tabbarIcon} source={icon} />
                                    <Text style={[styles.tabbarText, { color: this.state.selectIndex === index ? '#48cef4' : '#fff' }]}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    })}

                </View>
            </View>
        )
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {   
            BackHandler.exitApp()
            return false;
        });
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height
    },
    pageView: {
        flex: 1,
    },
    tabbar: {
        flexDirection: 'row',
        height: 52,
        backgroundColor: '#050f24',
        alignItems: 'center',
        justifyContent: 'center',

    },
    tabbarItem: {
        flex: 1,
        alignItems: 'center'
    },
    tabbarIcon: {
        width: 30,
        height: 30
    },
    tabbarText: {
        color: '#fff',
        fontSize: 11,
        textAlign: 'center'
    }
})
export default Index;