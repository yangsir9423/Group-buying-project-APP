import React,{Component} from 'react';
import CommentItem from "./CommentItem/index";
export default class CommentComponent extends Component{
    render(){
        return(
            <div>
                {/*循环遍历数据,将数据传输到CommentItem组件上*/}
                {this.props.data.map((item,index)=>(
                  <CommentItem data={item} key={index}/>
                ))}
            </div>
        )
    }
}

