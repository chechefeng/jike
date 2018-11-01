import React, {Component} from 'react';
import {connect} from 'react-redux';
import { DatePicker,Button } from 'antd';
import {loginFun} from "../../actions/login"
class Login extends Component {

    constructor(props) {
        super(props)


    }


    componentDidMount() {

    }



    componentWillMount() {


    }

    logins=()=>{
       let {loginFun}  = this.props
        loginFun({
            isLogin:"123"
        },()=>{

        })
    }
    render() {

        return (
            <div >

                <Button type="primary" onClick={this.logins}>Primary</Button>
            </div>

        )
    }
}
// 映射Redux state到组件的属性
function mapStateToProps(state) {
    console.log(state)
    return {

        isLogin:state
    }
}

//映射Redux actions到组件的属性
function mapDispatchToProps(dispatch) {
    return {
        loginFun: (args, cb) => dispatch(loginFun(args, cb)),

}
}

//连接组件
export default connect(mapStateToProps, mapDispatchToProps)(Login)