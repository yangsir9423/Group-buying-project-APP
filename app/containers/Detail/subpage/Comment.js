import React,{Component} from 'react';
import {getComment} from '../../../fetch/detail'
import CommentComponent from "../../../components/CommentComponent/index";
import LoadMore from "../../../components/LoadMore/index";
//拿到数据
export default class Comment extends Component{
    constructor(){
        super();
        this.state={
            page:0,
            data:[],
            hasMore:true,
            isLoading:true
        }
}
    render(){
        return(
            <div>
                {/*评价列表*/}
                {/*判断是否有数据,如果有,就加载这个组件,要将数据传入,否则显示正在加载*/}
                {this.state.data.length?<CommentComponent data={this.state.data}/>:<div>正在加载</div>}
                {/*因为要加载更多,我们之前之前已经写好这个组件然后直接引入出来,将状态里面需要传入属性传入进来*/}
                <LoadMore isLoading={this.state.isLoading} hasMore={this.state.hasMore} loadMore={this.loadMore.bind(this)}/>
            </div>
        )
    }
    //获取数据 默认加载第一页 下拉加载更多
    componentWillMount(){
        this.processData(getComment(this.props.id,0))
    }
    loadMore(){//用来加载更多的方法
        this.setState({
            isLoading:true,//正在加载的时候为true,防止重复加载
            page:this.state.page+1//加载的时候让页码加1
        },()=>{
            this.processData(getComment(this.props.id,this.state.page))
        })
    }
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,//更多数据
                data:this.state.data.concat(data),//加载更多的数据需要跟以前的数据进行拼接
                isLoading:false//加载完之后,改为false
            })
        })
    }
}

