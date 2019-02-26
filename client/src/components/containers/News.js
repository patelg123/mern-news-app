import React, {Component} from 'react';
import NewsItemListing from '../presentation/NewsItemListing';
import { connect } from 'react-redux';
import { fetchNews } from '../../actions/actions';

class News extends Component {

  componentDidMount(){

          var fakeNews = [{
              id: '1',
              title: 'Mad owl chases car',
              teaser: 'Mad owl seen tormenting drivers in Morecambe'
          }, {
              id: '2',
              title: 'Owl stowaway',
              teaser: 'Despicable owl impersonates passenger to board flight to Luton'
          }];

          this.props.dispatch(fetchNews(fakeNews));
      };


    render() {

      const newsItems = this.props.news.map( (news, i) => {
        return ( <li key={i}><NewsItemListing data = {news} /></li> );
      });



      return (
          <div>
              <h2>News Items</h2>
              {(this.props.news.length > 0) ? <ul>{newsItems}</ul> : <div>Sorry we have no news</div>}
          </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.news.news
    }
}

export default connect(mapStateToProps)(News);
