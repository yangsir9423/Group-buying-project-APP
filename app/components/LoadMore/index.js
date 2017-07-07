import React,{Component} from 'react';
import './index.less'
export default class LoadMore extends Component{
    render(){
        return(
            <div className="has-more">
                {this.props.hasMore?<div ref="more" onClick={this.loadMore.bind(this)}>加载更多</div>
                    :<div>我是底线的</div>}
            </div>
        )
    }
    componentDidMount(){
        //绑定滚动事件
        this.fn=()=>{
           clearTimeout(this.time);//清掉旧的定时器
            this.time=setTimeout(()=>{
                console.log('滚动');
                //先判断是否正在加载
                if (this.props.isLoading){
                    return
                }
                let srceen=window.screen.height;//屏幕的高度
                let top=this.refs.more.getBoundingClientRect().top;//getBoundingClientRect()可以让当前元素获得当前元素距离屏幕上下左右的位置
                if (top<srceen){//如果按钮进入可视窗口则加载更多按钮 即可
                    this.props.loadMore();
                }
                console.log(top);
                console.log(this.refs.more);
                //判断按钮距离屏幕顶端的高度,和可视窗口的高度
            },50)
        };
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmount(){
        //移动滚动事件
        window.removeEventListener('scroll',this.fn)
}


    loadMore(){//调用父级传递过来加载更多函数
        if (this.props.isLoading){
            return
        }
        this.props.loadMore();
    }
}

