import React,{Component} from 'react';
import Star from "../Star/index";
import './index.less'
export default class InfoComponent extends Component{
    render(){
       let {img,star,desc,title,subTitle,price}=this.props.data;
        return(
          <div className="info-component">
              <div className="info-list">
                  <img src={img} alt=""/>
                  <div>
                     <h3>{title}</h3>
                      <div className="info-star">
                          {/*stat组件需要接收一个点亮的星星数*/}
                          <Star count={star}/> <span>￥{price}</span>
                      </div>
                      <p>{subTitle}</p>
                  </div>
              </div>
              <br/>
              <hr/>
              {/*将内容转换成html插入到页面中*/}
              <div dangerouslySetInnerHTML={{__html:desc}}></div>
          </div>

        )
    }
}

