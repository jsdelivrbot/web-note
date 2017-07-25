import React from 'react';
import PropTypes from 'prop-types'
import { Router, Route, IndexRedirect, browserHistory } from 'dva/router';
import App from './routes/app'

//注入model
const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

// 用户登录验证
function requireAuth(nextState, replace) {
  const path = nextState.location.pathname
  const loginPath = '/login'
//if (!auth.isLoginIn()) {
//  path !== loginPath && replace({
//    pathname: '/login',
//    state: {
//      referrer: path
//    }
//  })
//}
}


//function RouterConfig({ history, app }) {
//return (
//  <Router history={history}>
//    <Route
//	      path='/'
//	      onEnter={(...args) => {
//	        requireAuth(...args)
//	      }}
//	      component={App}
//	    >
//	    <IndexRedirect to="/home" />
//    <Route
//    	path="home" 
//    	getComponent={(location, cb) => {
//	        require.ensure([], require => {
//	        	registerModel(app, require('./models/home'))
////	          cb(null, { component: require('./routes/home/') })
//	          cb(null, require('./routes/home/').default)
//	        })
//    }} />
//	    </Route>
//  </Router>
//);
//}

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      onEnter (...args){
        requireAuth(...args)
      },
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/home'))
          cb(null, { component: require('./routes/home/') })
        }, 'home')
      },
      childRoutes: [
        {
          path: 'home',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/home'))
              cb(null, require('./routes/home/'))
            }, 'home')
          }
        }
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}


export default Routers;
