import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NewsItemListing extends Component {
    render() {
        return (
            <div>
                <div><b>{this.props.title}</b></div>
                <div>{this.props.teaser}</div>
            </div>
        );
    }
}

NewsItemListing.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    teaser: PropTypes.string.isRequired
};

export default NewsItemListing;
