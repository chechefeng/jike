import React, {Component} from 'react';
import { Row, Col,DatePicker,Menu,Icon } from 'antd';


import "./css/index.css"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup
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

                <div className="header">
                    <Row type="flex" justify="start">
                        <Col  offset={4} style={{textAlign:"center"}} span={12}>Twilio Autopilot Demo Webinar | Register now</Col>
                        <Col  offset={4} style={{width:"68px"}}>
                            <Menu
                                mode="horizontal"
                            >
                                <SubMenu title={"help"}>
                                    <MenuItemGroup title="Item 1">
                                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title="Item 2">
                                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                            </Menu>
                        </Col>
                        <Col   span={1}>login</Col>

                    </Row>
                    <DatePicker></DatePicker>






                </div>
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