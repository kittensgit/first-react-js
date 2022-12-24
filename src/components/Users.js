import React from "react";
import User from "./User";

class Users extends React.Component {
    render() {
        if (this.props.users.length > 0)
            return (<div>
                {this.props.users.map((el) => ( // метод map позволяет быстро перебирать массив(el - каждый юзер)
                    <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} user={el}/> // для вывода элементов с помощью Мар, нужно добавлять key(ключ)
                ))}
            </div>)
        else
            return (<div className="user">
                <h3>Пользователей нет</h3>
            </div>)

    }
}

export default Users