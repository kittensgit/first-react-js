import React from "react";


class Test extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: true
    }
    this.onEdit = this.onEdit.bind(this)
  }
  onEdit(){
    this.setState(state =>({
      name: !state.name
    }))
  }
  render(){
    if(this.state.name){
      return(
        <div onClick={this.onEdit}>HELLO </div>
    )
    }
    else{
      return(
        <div onClick={this.onEdit}>BYE</div>
    )
    }
  }
}

export default Test