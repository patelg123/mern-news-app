import constants from '../constants/actionTypes'

var initialState = {
  news: []
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch(action.type) {

    case constants.NEWS_RECEIVED:
      updated['news'] = action.news
      return updated

    default:
      return state
    }
}
