import React,{Component} from 'react';
import './index.less'
export default class ChoosCity extends Component{
    render(){
        return(
            <div className="city">
             <h3>
                 选择城市
             </h3>
                <ul>
                    <li onClick={this.props.changCity.bind(this,'北京')}>北京</li>
                    <li onClick={this.props.changCity.bind(this,'上海')}>上海</li>
                    <li onClick={this.props.changCity.bind(this,'武汉')}>武汉</li>
                    <li onClick={this.props.changCity.bind(this,'长沙')}>长沙</li>
                    <li onClick={this.props.changCity.bind(this,'广州')}>广州</li>
                    <li onClick={this.props.changCity.bind(this,'深圳')}>深圳</li>
                </ul>
            </div>
        )
    }
}

