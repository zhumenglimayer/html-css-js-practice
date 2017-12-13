import React from 'react'
import '_/styles/main.scss'

class TodoHeader extends React.Component {
    handleKeyUp = (e) => {
        if (e.keyCode == 13) {
            let time = new Date()
            let year = time.getFullYear()
            let month = time.getMonth() + 1
            let day = time.getDate()
            let hour = time.getHours()
            let min = time.getMinutes()
            let currentTime = year + '年' + month + '月' + day + '日' + hour + '时' + min + '分'
            let value = e.target.value
            if (!value) return false
            let newTodoItem = {
                text: value,
                isDone: false,
                time: currentTime
            }
            e.target.value = ''
            this.props.addItem(newTodoItem)
        }
    }
    render() {
        return (
            <div>
                <div className="todo-title">
                    <h1 className="title-color">React-Todos</h1>
                    <input type="text" placeholder="输入新的任务，回车确认" onKeyUp={this.handleKeyUp} className="todo-input"/>
                </div>
            </div>
        )
    }
}

export default TodoHeader