import actionTypes from '../constants/actionTypes';

function newsReceived(news){
    return {
        type: actionTypes.NEWS_RECEIVED,
        news: news
    }
}

function newsItemReceived(newsItem){
    return {
        type: actionTypes.NEWSITEM_RECEIVED,
        newsItem: newsItem
    }
}

export function fetchNews(fakeNews){
    console.log('presend')
    return dispatch => {
        return fetch(`/news`)
        .then( (response) => response.json() )
        .then( (data) => console.log(data))
        .catch( (e) => console.log(e) );
    }
}

export function fetchNewsItem(fakeNewsItem){
    return dispatch => {
        dispatch(newsItemReceived(fakeNewsItem));
    }
}
