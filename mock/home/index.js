import {get} from '../../app/index';

export function getAd() {
    return get('/api/ad');
}
getAd().then();

