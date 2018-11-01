import React from 'react'


class layout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            initDone: false
        };
    }

    render() {
        return (
            <div>
               {this.props.children}
            </div>
        )
    }

    componentDidMount(){

        //预加载数据

        //更改状态
        this.setState({
            initDone: true
        })
    }


}


export default layout