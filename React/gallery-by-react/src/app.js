import React from 'react'
import ReactDOM from 'react-dom'

import '_/styles/index.scss'

class App extends React.Component{
  render() {
    return (
      <div>Hello world.</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))