import React,{Component} from 'react';
import ReactSwipe from 'react-swipe'//轮播图插件
import './index.less'
import {Link} from 'react-router-dom'
export default class Slider extends Component{
    constructor(){
        super();
        this.state={
            index:0
        }

    }
    render(){
        let opt={continuous:false,
                 callback:(index)=>{
                     this.setState({
                         index
                     })
                 }
        }
        return(
            <div>
                <ReactSwipe className="carousel" swipeOptions={opt}>
                <div>
                    <ul>
                        <Link to="search/jingdian">
                            <li>
                                <i className="iconfont icon-piaofang"></i>
                                <span>美食</span>
                            </li>
                        </Link>

                        <Link to="search/jingdian">
                            <li>
                                <i className="iconfont icon-piaofang"></i>
                                <span>美食</span>
                            </li>
                        </Link>

                        <Link to="search/jingdian">
                            <li>
                                <i className="iconfont icon-piaofang"></i>
                                <span>美食</span>
                            </li>
                        </Link>

                        <Link to="search/jingdian">
                            <li>
                                <i className="iconfont icon-piaofang"></i>
                                <span>美食</span>
                            </li>
                        </Link>

                        <Link to="search/jingdian">
                            <li>
                                <i className="iconfont icon-piaofang"></i>
                                <span>美食</span>
                            </li>
                        </Link>

                        <Link to="search/jingdian">
                            <li>
                                <i className="iconfont icon-piaofang"></i>
                                <span>美食</span>
                            </li>
                        </Link>
                        <Link to="search/jingdian">
                            <li>
                                <i className="iconfont icon-piaofang"></i>
                                <span>美食</span>
                            </li>
                        </Link>
                        <Link to="search/jingdian">
                            <li>
                                <i className="iconfont icon-piaofang"></i>
                                <span>美食</span>
                            </li>
                        </Link>
                        <Link to="search/jingdian">
                            <li>
                                <i className="iconfont icon-piaofang"></i>
                                <span>美食</span>
                            </li>
                        </Link>
                        <Link to="search/jingdian">
                            <li>
                                <i className="iconfont icon-piaofang"></i>
                                <span>美食</span>
                            </li>
                        </Link>
                    </ul>
                </div>

                    <div>
                        <ul>
                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>

                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>

                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>

                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>

                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>

                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>

                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>

                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>

                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>

                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>

                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="search/jingdian">
                                <li>
                                    <i className="iconfont icon-piaofang"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index==0?"active":''}></li>
                    <li className={this.state.index==1?"active":' '}></li>
                    <li className={this.state.index==2?"active":' '}></li>
                </ul>
            </div>
        )
    }
}

