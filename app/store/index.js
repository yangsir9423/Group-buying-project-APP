import {createStore} from 'redux';//创建store
import reducers from '../reducers';

export function configureStore(initState) {
    return createStore(reducers,initState,window.devToolsExtension?window.devToolsExtension():undefined)
}

