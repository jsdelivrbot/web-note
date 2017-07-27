import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import NProgress from 'nprogress'
import { classnames, config } from 'utils'
import { Layout, Loader } from 'components'
import './app.less'
import '../themes/index.less'

const { prefix, homePages, openPages } = config
const { Header, Footer, styles } = Layout

let lastHref

const App = ({ children, dispatch, app, loading, location }) => {
	const {user} = app
  let { pathname } = location
  pathname = pathname.startsWith('/') ? pathname : `/${pathname}`
  const href = window.location.href
  
	const headerProps = {
    user,
    logout () {
      dispatch({ type: 'app/logout' })
    }
  }  
  
  if (lastHref !== href) {
    NProgress.start()
    if (!loading.global) {
      NProgress.done()
      lastHref = href
    }
  }
  
  if (openPages && openPages.includes(pathname)) {
    return (<div>
      <Loader spinning={loading.effects['app/query']} />
      {children}
    </div>)
  }
  if (homePages && homePages.includes(pathname)) {
    return (<div>
      <Header {...headerProps} />
      {children}
      <Footer />
    </div>)
  }
  
  return (
    <div className={classnames(styles.layout)}>    	
       <div className={styles.main}>
          <Header {...headerProps} />
          <div className={styles.container}>
            <div className={styles.content}>
              {children}
            </div>
          </div>
          <Footer />
        </div>
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
