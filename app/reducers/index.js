//这个文件是合并所有reducer的方法 导出去,让store使用
import {combineReducers} from 'redux'; //拿出来的方法
import {userInfo} from './userInfo'
import {store} from './store'
export default combineReducers({
      userInfo,
    store
})
