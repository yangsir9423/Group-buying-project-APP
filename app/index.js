import React from 'react';
import {render} from 'react-dom';
import APP from './containers/index'
import './assets/index.less'
import {Provider} from 'react-redux';//将store注入到APP组件里面去
//导入store
import {configureStore} from './store';
//可以在configureStore里面传入一个初始状态
let store=configureStore();//生成store
render(
    <Provider store={store}>
        <APP/>
    </Provider>,
    document.getElementById('root')//基本容器
)
