import React,{Component} from 'react';
import RouterMap from '../routers/index'
import {connect} from 'react-redux';
//绑定actionCreactor组成的对象
import {bindActionCreators} from 'redux';
//获取所有actionCreator组成的对象
import * as Actions from '../actions/userInfo'
import {getStorage} from '../local'
class APP extends Component{
    constructor(props){
        super();
        this.state={
            done:false
        }
    }
    render(){
        return(
            <div>
                {/*如果当路径为/，RouterMap就会变为Home组件*/}
                {this.state.done?<RouterMap/>:<div>正在加载</div>}
            </div>
        )
    }
    componentDidMount(){
        //先去本地查找 是否存储过localstorage名字交cityName的
        //1.第一次没有cityName,赋予一个默认值 杭州
        //2.将当前城市存放到redux
        let cityName=getStorage('cityName');
        if (cityName==null){
            cityName='杭州'
        }
        //页面加载后,就设置一个城市
        this.props.userActions.update({
            cityName
        })
       setTimeout(()=>{
           this.setState({
               done:true
           })
           console.log(this.props.userActions);
       },1000)
    }
}
export default connect(
    state=>{
        return{}
    },
    dispatch=>{
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(APP)
