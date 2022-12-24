import React from "react";

class ClassComp extends React.Component{
    constructor (props){
        super (props)
        this.state = {
            count: 0
        }
        // this.onIncrement = this.onIncrement.bind(this)
        // this.onDecrement = this.onDecrement.bind(this)
        // this.reset = this.reset.bind(this)
    }
    // onIncrement(){
    //     this.setState({count: this.state.count+1})
    // }
    // onDecrement(){
    //     this.setState({count: this.state.count-1})
    // }
    // reset(){
    //     this.setState({count: 0})   
    // }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count+1})}>прибавь</button>
                <button onClick={() => this.setState({count: this.state.count-1})}>отнеми</button>
                <button onClick={() => this.setState({count: 0})}>сбрось</button>
                {/* <button onClick={this.onIncrement}>прибавь</button>
                <button onClick={this.onDecrement}>отнеми</button>
                <button onClick={this.reset}>сбрось</button> */}
            </div>
        )
    }
}

export default ClassComp