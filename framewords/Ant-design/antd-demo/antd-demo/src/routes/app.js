import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'

import './app.less'

const App = ({ children, dispatch, app, loading, location }) => {
 
  return (
    <div>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ app, loading }) => ({ app, loading }))(App)
