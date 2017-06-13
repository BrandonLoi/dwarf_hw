import React, { Component } from 'react';
import './App.css';

import Header from './Header.js'
import Article from './Article.js'
import Ad from './Ad.js'
import OtherArticles from './OtherArticles.js'
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">

        <Article articletitle={"Gold Madness - Fact or Fiction?"} />
          <aside className="large-4 medium-12 columns">
          <Ad adTitle="The Last Hammer You'll Ever Need"/>
          </aside>
          <OtherArticles />
        </main>
        <Footer footerText='&copy; 2017 Erebor Industries'/>
      </div>
    );
  }
}

export default App;
