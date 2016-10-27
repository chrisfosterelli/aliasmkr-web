
/* DeleteButton
 */

import React from 'react'

class DeleteButton extends React.Component {

  constructor() {
    super()
    const isDeleting = false
    this.state = { isDeleting }
  }

  onClick(e) {
    e.preventDefault()
    const isDeleting = true
    this.props.deleteAlias(this.props.alias, this.props.email)
    this.setState({ isDeleting })
  }

  render() {
    return (
      <span>
        { this.state.isDeleting &&
          <span>
            Deleting...
          </span>
        }
        <span onClick={e => this.onClick(e)}>
          x
        </span>
      </span>
    )
  }

}

export default DeleteButton
