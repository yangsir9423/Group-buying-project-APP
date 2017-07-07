import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import {connect} from 'react-redux';
import UserInfo from "../../components/UserInfo/index";
import OrderList from "./subpage/OrderList";
class User extends Component{
    render(){
        return(
            <div>
                {/*返回后会回到登录页,检测是否登录,会再次跳转回来,指定返回的页面*/}
              <HeaderComponent title="用户信息" history={this.props.history} back="/"/>
                <UserInfo userInfo={this.props.userInfo}/>
              <OrderList username={this.props.userInfo.username}/>
            </div>
        )
    }
}
export default connect(
    state=>{
        return{userInfo:state.userInfo}
    }
)(User)


