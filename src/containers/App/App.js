import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';

import Home from '../Home/Home';
import Header from '../../components/Header/Header';
import ContactUs from '../ContactUs/ContactUs';
import Events from '../Events/Events';
// import EventCategory from '../../components/EventCategory/EventCategory';
import Footer from '../../components/Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }


  render() {
    return (
      <div className="App">
        <Header isTop={this.state.isTop} />
        <Switch>
          {/* <Route path="/events" component={ Events } /> */}
          {/* <Route path="/about" component={ About } /> */}
          {/* <Route path="/photo" component={ Photo } /> */}
          {/* <Route path="/events/:category" component={ EventCategory } /> */}
          <Route path="/events" component={ Events } />
          <Route path='/' exact component={ Home } />
        </Switch>
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
