import React, {Component} from 'react';
import Part_1 from "./part1"
import Part_2 from "./part2"
import Part_3 from "./part3"
import Part_4 from "./part4"
import Part_5 from "./part5"
import Part_6 from "./part6"
import Part_7 from "./part7"
import Part_8 from "./part8"

import "./css/index.css"
import Navs from "./nav"

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
                <Navs/>
                <main className="body">
                    <div className="body__inner">
                        <Part_1/>
                        <Part_2/>
                        <Part_3/>
                        <Part_4/>
                        <Part_5/>
                        <Part_6/>
                        <Part_7/>
                        <Part_8/>

                    </div>

                </main>
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