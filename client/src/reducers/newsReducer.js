import constants from '../constants/actionTypes'

var initialState = {
  news: [],
  newsItem: {}
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch(action.type) {

    case constants.NEWS_RECEIVED:
        updated['news'] = action.news;
        return updated;

    case constants.NEWSITEM_RECEIVED:
        updated['newsItem'] = action.newsItem
        return updated;

    default:
        return state;
    }
}
