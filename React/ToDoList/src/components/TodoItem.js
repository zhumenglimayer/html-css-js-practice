import React from 'react'
import {Button, Row, Col} from 'antd'
import 'antd/dist/antd.css'

class TodoItem extends React.Component {
    render() {
        let className = this.props.isDone ? 'task-done' : ''
        return (
            
                <tr>
                    <td className="td-check"><input type="checkbox"/></td>
                    <td><div>{this.props.time}</div></td>
                    <td className="td-task"><span className={className}>{this.props.text}</span></td>
                    <td className="td-action"><Button type="danger" className="todo-button">删除</Button></td>
                </tr>
            
        )
    }
}

export default TodoItem