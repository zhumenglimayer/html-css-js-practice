import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import React from 'react'

class Counter extends React.Component {
    constructor(args) {
        super(args)
    }

    render() {
        const { value, onIncrement, onDecrement } = this.props
        return (
            <div>
                <div>{value}</div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        )
    }
}

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const store = createStore(reducer)

const render = () => {
    ReactDOM.render(
        <Counter value={store.getState()} onIncrement={() => store.dispatch({ type: 'INCREMENT' })} onDecrement={() => store.dispatch({ type: 'DECREMENT' })} />,
        document.getElementById('app')
    )
}

render()

store.subscribe(render)