import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import Test from "./components/Test";
import axios from "axios"; // биб-ка позволяет обращаться по url-адресам и получать какую-либо информацию
import ClassComp from "./components/ClassComp";
import FunctionComp from "./components/FunctionComp";

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((response) => { //get - обращаемся к url-адресу и получаем данные в виде промиса, then - функция, которая выполняется, когда промис переходит в состояние «выполнен успешно», и получает результат
            this.setState({users: response.data.data}) // берем пользователей с стороннего веб-сайта(reqres)
        })

        this.state = { // создаем состояние для того что-бы можно было отображать пользователей сразу при добавлении их в массив
            users : [] // - список всех пользователей, в котром каждый элемент(юзер) в виде объекта(ключ: значение(важно иметь уникальный индефикатор!!))
        }

        this.addUser = this.addUser.bind(this) // bind() позволяет чтобы addUser мог взаимодействовать с состояниями 
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }
    render() {
        return (<div>
            {/* <ClassComp />
            <FunctionComp name="nika"/>
            <Test /> */}
            <Header title='Список пользователей' />
            <main>
                <Users users={this.state.users} /* передаём список пользователей */ onEdit={this.editUser} onDelete={this.deleteUser} /* передаём метод deleteUser*//>
            </main>
            <aside>
                <AddUser onAdd={this.addUser}/> 
            </aside> 
        </div>) // AddUser доступен метод addUser через свойство onAdd
    }
    editUser(user){
        let allUsers = this.state.users // получаем всех пользователей
        allUsers[user.id - 1] = user // по инднксу обращаемся пользователя и заменяем

        this.setState({users: []}, () => { // сначала мы удаляем всех пользователей
            this.setState({users: [...allUsers]}) //добавляем всех пользователей из allUsers
        })
    }
    deleteUser(id){
        this.setState({
            users: this.state.users.filter((el)=> el.id !== id) //создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции(следовательно элементы не проходящие проверку будут удалены)
        })
    }
    addUser(user){ // получает нового польвателя
        const id = this.state.users.length + 1
        this.setState({users: [...this.state.users, {id, ...user}]}) // ...this.state.users - обращаемся ко всему списку и добавляем объект получаемый в параметре user
    }
}

export default App