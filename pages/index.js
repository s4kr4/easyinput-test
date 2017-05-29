import { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'

import EasyInput from 'easyinput'

export default class InputTest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textValue: ""
    }
  }

  onKeyDown(event) {
    this.setState({
      textValue: EasyInput.handleKeyDown(event)
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <TextField
          hintText="text"
          value={ this.state.textValue }
          onKeyDown={ (event) => this.onKeyDown(event) } />
      </MuiThemeProvider>
    )
  }
}
