import React,{Component} from 'react';
import './index.less'
export default class OrderListItem extends Component{
    constructor(props){
        super(props);
        //将属性转化成自已的状态
        this.state={
          commentState:props.data.commentState
        }
    }
    render(){
        let {id,commentState,img,title,count,price}=this.props.data;
        return(
            <div>
                <div className="order-list-item">
                    <img src={img} alt=""/>
                    <div className="list-content">
                        <h3>商户{title}</h3>
                        <span>数量{count}</span>
                        <span>价格{price}</span>
                    </div>
                    <div className="list-btn">
                        {/*三个状态 0表示未评价 1表示正在评价 2表示评价完*/}
                        {this.state.commentState===0?<button onClick={this.changeCommentState.bind(this)}>评价</button>:
                            this.state.commentState===1?'':
                                <button className="unselect">已评价</button>}

                    </div>
                </div>
                {/*当正在评价时,出现评论框,*/}
                {
                    this.state.commentState===1?<div className="comment-arear">
                        <textarea ref={ref=>this.cooment=ref}></textarea>
                       <div>
                           <button onClick={this.sureCommit.bind(this)}>确认评价</button>
                           <button onClick={this.cancel.bind(this)}>取消</button>
                       </div>
                    </div>:''
                }
            </div>
        )
    }
    changState(){
        this.setState({
            commentState:2
        })
    }
    sureCommit(){
        this.props.commitComment(this.props.data.id,this.cooment.value,this.changState.bind(this))
    }
    changeCommentState() {
        this.setState({//改变状态为评价中
            commentState:1
        })


    }
    cancel(){
        this.setState({//改变状态为未评价
            commentState:0
        })
    }

}
