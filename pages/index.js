import { Component } from 'react'
import { render } from 'react-dom'
import { handleKeyDown } from 'easyinput'

export default class InputTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textValue: ""
    }
  }

  onKeyDown(event) {
    console.dir(event.altKey)
    let ret = handleKeyDown(event)
    this.setState({
      textValue: handleKeyDown(event)
    })
  }

  render() {
    return (
      <div>
        test
        <input type="text" value={this.state.textValue} onKeyDown={this.onKeyDown.bind(this)} />
      </div>
    )
  }
}
