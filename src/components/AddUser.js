import React from "react";


class AddUser extends React.Component {
    userAdd = {} // переменнвя(сво-во)
    constructor(props) {
        super(props)
        this.state = { // записываем данные в состояние, котрые получаем от пользователя из формачки
            first_name: "",
            last_name: "",
            email: "",
            avatar: "",
            isHappy: false
        }
    }
    render() {
        return ( // setState устанавливает состояние, ref - ссылка на html-тег myForm - название ссылки
            <form ref={(el) => this.myForm = el}> 
                <input placeholder="Name" onChange={(event) => this.setState({ first_name: event.target.value })} /> 
                <input placeholder="Surname" onChange={(event) => this.setState({ last_name: event.target.value })} />
                <textarea placeholder="Email" onChange={(event) => this.setState({ email: event.target.value })} />
                <input placeholder="Avatar" onChange={(event) => this.setState({ avatar: event.target.value })} />
                <label htmlFor="isHappy">Happy?</label>
                <input type="checkbox" id="isHappy" onChange={(event) => this.setState({ isHappy: event.target.checked })} />
                <button type="button" onClick={() => {
                    this.myForm.reset() //очищает формачку
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        avatar: this.state.avatar,
                        isHappy: this.state.isHappy,
                    }
                    if (this.props.user) // если будет передоваться св-во user
                        this.userAdd.id = this.props.user.id // устанавливаем id 
                    this.props.onAdd(this.userAdd)
                }
                }>Add</button>
            </form>
        )
    }
}

export default AddUser