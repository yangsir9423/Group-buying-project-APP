import * as Types from '../action-types/userInfo';//整体作为对象命名

//actionCreator 是一个函数

 export function update(data) {//update修改的动作
     return{
         type:Types.UPDATE_CITY,
         data
     }
 }