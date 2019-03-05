import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { fetchNewsItem } from '../../actions/actions';

class NewsItemDetail extends Component {
    render() {
        return (
            <div>
            <h2>{this.props.data.title}</h2>
            <p>{this.props.data.body}</p>
            </div>
        );
    }
}

NewsItemDetail.propTypes = {

    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
};

export default NewsItemDetail;
