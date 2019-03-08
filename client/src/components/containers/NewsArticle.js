import React, { Component} from 'react';
import NewsItemDetail from '../presentation/NewsItemDetail';
import { connect } from 'react-redux'
import { fetchNewsItem } from '../../actions/actions'

class NewsArticle extends Component {

    componentDidMount(){
        this.props.dispatch(fetchNewsItem(this.props.match.params.id));
    }

    render(){
        let { newsItem } = this.props;

        return (
            <div>
                <h2>News Story</h2>
                <ul>
                    { newsItem ? <NewsItemDetail data={newsItem} /> : null}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        newsItem: state.news.newsItem
    }
}

export default connect(mapStateToProps)(NewsArticle);
