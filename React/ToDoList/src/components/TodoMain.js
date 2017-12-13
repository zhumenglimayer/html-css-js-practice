import React from 'react'
import TodoItem from './TodoItem'
import {Table} from 'antd'

class TodoMain extends React.Component {
    render() {
        if (this.props.todos.length == 0) {
            return (
                <div className="todo-empty">目前没有任务，请添加任务</div>
            )
        } else {
            return (
                <div className="todo-main">
                    <table>
                        <thead>
                            <tr>
                                <th className="td-check"><input type="checkbox" id="checkbox_all"/></th>
                                <th>Time</th>
                                <th className="td-task">Task</th>
                                <th className="td-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.todos.map((todo, index) => {
                                    return <TodoItem text={todo.text} isDone={todo.isDone} index={index} key={index} time={todo.time}/>
                                })
                            }
                        </tbody>
                    </table>


                </div>
            )
        }
    }
}

export default TodoMain