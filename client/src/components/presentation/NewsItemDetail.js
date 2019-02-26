import React, { Component} from 'react';
//import PropTypes from 'prop-types';

class NewsItemDetail extends Component {
    render(){
        return (
            <div>
                <h2>News story title</h2>
                <p>Body: test Mad Owl story text {this.props.id}</p>
            </div>
        );
    }
}

export default NewsItemDetail;
