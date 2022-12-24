import React from "react";
import AddUser from "./AddUser";
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5" // библиотека иконок 

class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editForm: false 
        }
    }
    user = this.props.user // текущий пользователь
    render() { 
        return (<div className="user">
            <IoCloseCircleSharp className="delete-icon" onClick={()=> this.props.onDelete(this.user.id)} /> {/* получаем id удаляемого пользователя */}
            <IoHammerSharp className="edit-icon" onClick={()=>{
                this.setState({
                    editForm: !this.state.editForm // меняем состояние на противоположное
                })
            }}/>
            <h3>{this.user.first_name} {this.user.last_name}</h3>
            <img src={this.user.avatar}/>
            <p>{this.user.email}</p>
            <b>{this.user.isHappy ? "Happy" : "Not happy"}</b>

            {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit}/>} {/* && - говорит о том что формачка появится только если true */}
        </div>)
    }
}

export default User