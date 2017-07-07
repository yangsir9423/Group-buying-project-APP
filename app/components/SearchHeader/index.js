import React,{Component} from 'react';
import SearchInput from "../SearchInput/index";
import './index.less'
export default class SearchHeader extends Component{
    render(){
        return(
            <div className="back search-header">
                <i className="iconfont icon-fanhuiqua-copy" onClick={this.back.bind(this)}></i>
               <SearchInput fn={this.props.fn}  value={this.props.value}/>
            </div>
        )
    }
    back(){
        this.props.history.go(-1);
    }
}

