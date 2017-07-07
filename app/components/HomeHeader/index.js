import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom'
import Search from "../../containers/Search/index";
import SearchInput from "../SearchInput/index";
//主页头部组件
export default class HomeHeader extends Component{
    render(){
        return(
            <div className="home-header back">
                <Link to='/city'>
                    <div className="city">
                        {this.props.cityName}
                        <i className="iconfont icon-arrow"></i>
                    </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-sousuo"></i>
                    {/*此搜索框需要接受一个函数,当回车时,调用传递的函数,将值传递进来,/serarch/all/输入框的内容*/}
                    <SearchInput value="" fn={this.toSearch.bind(this)}/>
                    <input type="text"/>
                </div>
                <Link to='/login'>
                    <div className="profile">
                        <i className="iconfont icon-yonghu"></i>
                    </div>
                </Link>
            </div>

        )
    }
    toSearch(value){
        //history自已默认不存在，通过父级传递
        this.props.history.push('/search/all/'+value)
    }
}

