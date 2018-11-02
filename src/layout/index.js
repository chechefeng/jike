import React from 'react'
import Footer from "../app/containers/home/Footer.jsx"

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
                <Footer/>
            </div>
        )
    }

    componentDidMount(){
        this.setState({
            initDone: true
        })
    }


}


export default layout