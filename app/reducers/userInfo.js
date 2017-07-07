import * as Types from '../action-types/userInfo';//整体作为对象命名
let initState={};//初始状态
export function userInfo(state=initState,action) {//action就是actions传过来的值
    switch (action.type){
        //将传入的state 更新成最新的状态
        case Types.UPDATE_CITY://判断是否是修改城市,如何是,就将data改掉
            return action.data;
        default:
            return state;//给一个默认状态
    }
}