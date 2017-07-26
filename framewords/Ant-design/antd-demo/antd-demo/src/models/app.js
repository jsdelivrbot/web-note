import { query, logout } from '../services/app'
import { routerRedux } from 'dva/router'
import config from 'config'

export default {
	namespace: 'app',
	state: {
		user: {},
	},
	subscriptions: {
//		setup ({ dispatch }) {
//			//登录验证
//    dispatch({ type: 'query' })
//  },
	},
	effects: {
		*query ({
      payload,
    }, { call, put }) {
      const { success, user } = yield call(query, payload)
      if (success && user) {
        yield put({
          type: 'updateState',
          payload: {
            user
          },
        })
        if (location.pathname === '/login') {
          yield put(routerRedux.push('/home'))
        }
      } else {
        if (config.openPages && config.openPages.indexOf(location.pathname) < 0) {
          let from = location.pathname
          window.location = `${location.origin}/login?from=${from}`
        }
      }
    },

    *logout ({
      payload,
    }, { call, put }) {
      const data = yield call(logout, parse(payload))
      if (data.success) {
        yield put({ type: 'query' })
      } else {
        throw (data)
      }
    },
		
	},
	reducers: {
		
	}
}
