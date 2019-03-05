import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import Home from './components/layouts/Home';
import About from './components/layouts/About';
import Layout from './components/layouts/Layout'
//import NewsItemDetail from './components/presentation/NewsItemDetail';
import NewsArticle from './components/containers/NewsArticle';

const App = ()=>(
      <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path='/news/:id' component={NewsArticle}/>
            </Layout>
        </BrowserRouter>
      </Provider>
);

export default App;
