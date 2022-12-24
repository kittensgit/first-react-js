import React from "react";


class Header extends React.Component{
  render(){
    return(
      <header className="head">
        {this.props.title}
      </header>
    )
  }
}

export default Header