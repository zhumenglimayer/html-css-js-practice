import React from 'react'
import ReactDOM from 'react-dom'
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'

class App extends React.Component {
    constructor(args) {
        super(args)
        this.state = {
            todos: []
        }
    }

    addItem = (item) => {
        this.state.todos.push(item)
        this.setState({ todos: this.state.todos })
    }

    render() {
        return (
            <div className="todo-wrapper">
                <TodoHeader addItem={this.addItem} />
                <TodoMain todos={this.state.todos} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)