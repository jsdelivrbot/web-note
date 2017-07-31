import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import NProgress from 'nprogress'
import { classnames, config } from 'utils'
import { Layoutx, Loader } from 'components'
import { Layout, Menu, Icon } from 'antd';
import './app.less'
import '../themes/index.less'

const { prefix, homePages, openPages } = config
const { Header, Footer, Menux, styles } = Layoutx

const {Sider, Content } = Layout;


let lastHref

const App = ({ children, dispatch, app, loading, location }) => {
	const {user, isCollapsed, menu} = app
  let { pathname } = location
  pathname = pathname.startsWith('/') ? pathname : `/${pathname}`
  const href = window.location.href
  
	const headerProps = {
    user,
    logout () {
      dispatch({ type: 'app/logout' })
    }
  }
	
	const menuProps = {
		menu
	}
	
	const toggle = () => {
    dispatch({ type: 'app/toggle', payload: { isCollapsed: !isCollapsed } })
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
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={isCollapsed}
      >
        <Menux {...menuProps}/>
      </Sider>
      <Layout>
        <Header {...headerProps} />
        <div className={styles.slider_btn} onClick={toggle}>
          <Icon
            className="trigger"
            type={isCollapsed ? 'menu-unfold' : 'menu-fold'}
          />
        </div>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          <div className={styles.app_content}>{children}</div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
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
