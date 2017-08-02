import { query, logout } from '../services/app'
import * as menusService from '../services/menus'
import { routerRedux } from 'dva/router'
import config from 'config'
import { parse } from 'qs'

export default {
	namespace: 'app',
	state: {
		user: {},
		isCollapsed: false,
		menu: [
      {
        id: 1,
        icon: 'laptop',
        name: 'Dashboard',
        router: '/dashboard',
      },
    ],
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
      	
      	const { list } = yield call(menusService.query)
      	
      	let menu = list
      	
        yield put({
          type: 'updateState',
          payload: {
            user,
            menu
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
		updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
    toggle (state, { payload }) {
     	return {
        ...state,
        isCollapsed: payload.isCollapsed,
      }
  	}
	}
}
