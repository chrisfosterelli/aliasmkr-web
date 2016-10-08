
/* AliasCreator
 */

import React from 'react'

class AliasCreator extends React.Component {

  constructor(props) {
    super(props)
    const input = ''
    this.state = { input }
  }

  handleInputChange(e) {
    const input = e.target.value
    this.setState({ input })
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.createAlias(this.props.alias, this.state.input)
    this.setState({ input : '' })
  }

  render() {
    return (
      <div>
        { this.props.isCreating &&
          <span>
            Creating...
          </span>
        }
        <form onSubmit={e => this.onSubmit(e)}>
          <input 
            type="text"
            value={this.state.input}
            onChange={e => this.handleInputChange(e)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

export default AliasCreator
