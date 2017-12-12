import React from 'react'

class TodoHeader extends React.Component {
    handleKeyUp = (e) => {
        if (e.keyCode == 13) {
            let value = e.target.value
            if (!value) return false
            let newTodoItem = {
                text: value,
                isDone: false
            }
            e.target.value = ''
            this.props.addItem(newTodoItem)
        }
    }
    render() {
        return (
            <div>
                <h1>React-Todos</h1>
                <input type="text" placeholder="输入新的任务，回车确认" onKeyUp={this.handleKeyUp} />
            </div>
        )
    }
}

export default TodoHeader