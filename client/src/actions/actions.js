import actionTypes from '../constants/actionTypes';

function newsReceived(news){
    return {
        type: actionTypes.NEWS_RECEIVED,
        news: news
    }
}

export function fetchNews(fakeNews){
    return dispatch => {
        dispatch(newsReceived(fakeNews));
    }
}
