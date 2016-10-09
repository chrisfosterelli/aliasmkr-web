
/* Landing page 
 */

import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {

  render() {
    return (
      <div>
        <Link to="/login">
          returning user?
        </Link>
      </div>
    )
  }

}

export default Home
