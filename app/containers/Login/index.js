import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import {connect} from 'react-redux';//拿到redux数据需要connect
import *as Actions from '../../actions/userInfo';//拿到所有actionCreator的对象
import {bindActionCreators} from 'redux';
import LoginComponent from "../../components/LoginComponent/index";
//然后绑成一个对象
 class Login extends Component{
    constructor(){
        super();
        this.state={
            login:false//默认没有登录过,写一个方法是否登录,默认不显示不登录组件

        }
    }
    render(){
        return(
            <div>
                {/*因为要后退,所以要将history也要传过去*/}
             <HeaderComponent title="登录" history={this.props.history}/>
                {/*如果没有登录过 就显示登录组件 否则不显示直接跳转到用户界面*/}
                {this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div></div>}

            </div>
        )
    }
    //在这里我们需要写一个方法,这个方法是登录的,将用户名存入redux里
     login(username){
       let info=this.props.userInfo;
         info.username=username;
         //更新redux中的state
         this.props.userActions.update(info);
         //登录成功跳转到用户页
       //  判断如果login传了一个路由,登录成功后就跳转到传的路由那去,如果没传,就跳转到用户页的路由
       if (this.props.match.params.route){
           //提交到login的路径肯定是通过decodeURIComponent转化后的跳转是需要解码跳转
            this.props.history.push(decodeURIComponent(this.props.match.params.route));
       }else {
           //如果没指定跳回哪个页面,就跳转到用户页面
           this.props.history.push('/user');
       }
     }


    componentDidMount(){//页面加载完成后,就检验下有没有登录过,调用checkLogin方法
        this.checkLogin()
    }
    checkLogin(){//检查是否登录,在redux中state.userInfo 是否有username 如果有则登录过,反之则没有登录
   if (this.props.userInfo.username){//判断是否有用户,如果有,就跳转到用户页
       return this.props.history.push('/user')
   }
   this.setState({//如果没有用户,就显示login组件了
       login:true//显示登录组件

   })

    }
}

export default connect(
    state=>{
        return {userInfo:state.userInfo}//当前状态
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}//当前动作
    }

)(Login)//通过属性传给Login,在Login里面就能拿了