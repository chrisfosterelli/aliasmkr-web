
/* Landing page 
 */

const React       = require('react')
const ReactRouter = require('react-router')

const Link = ReactRouter.Link

const Home = React.createClass({
  render() {
    return (
      <div>
        <Link to="/login">
          returning user?
        </Link>
      </div>
    )
  }
})

module.exports = Home
