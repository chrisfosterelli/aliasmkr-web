
/* User DomainList Container
 * Domains for a particular current user
 */

import { connect } from 'react-redux'
import { fetchDomains } from '../actions/domains'
import DomainList from '../components/DomainList'

function mapDispatchToProps(dispatch) {
  return {
    fetchDomains: () => {
      dispatch(fetchDomains())
    }
  }
}

function mapStateToProps(state) {
  const domains = state.domains
  return { domains }
}

export default connect(mapStateToProps, mapDispatchToProps)(DomainList)
