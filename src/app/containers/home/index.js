import React, {Component} from 'react';
import {Row, Col, Menu, Button} from 'antd';


import "./css/index.css"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup
import Navs from "./nav"
import Footer from './Footer'
import Section2 from './Section2'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    componentWillMount() {
    }

    render() {
        return (
            <div >
                <hr/>
                <Navs/>
                <hr/>
                <Section2/>
                <hr/>
                <Footer />
            </div>

        )
    }
}
// // 映射Redux state到组件的属性
// function mapStateToProps(state) {
//     // console.log(state)
//     return {
//
//         isLogin:state
//     }
// }
//
// //映射Redux actions到组件的属性
// function mapDispatchToProps(dispatch) {
//     return {
//         loginFun: (args, cb) => dispatch(loginFun(args, cb)),
//
//     }
// }

//连接组件
export default Home