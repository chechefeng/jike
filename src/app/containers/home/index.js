import React, {Component} from 'react';
import {Row, Col, Menu, Button} from 'antd';
import Part_1 from "./part1"
import Part_2 from "./part2"
import Part_3 from "./part3"
import Part_4 from "./part4"
import Part_5 from "./part5"

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
<<<<<<< HEAD
                <hr/>
                <Section2/>
                <hr/>
                <Footer />
=======
                <main className="body">
                    <div className="body__inner">
                        <Part_1/>
                        <Part_2/>
                        <Part_3/>
                        <Part_4/>
                        <Part_5/>

                    </div>

                </main>
>>>>>>> 7b0b8fd3fd1894579f8bd00e5111508611b8702f
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