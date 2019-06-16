import React from 'react';
import Header from '../components/header';
import './Page.sass';

class PageLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <main className="main" role="main">
          {this.props.children}
        </main>
        <footer className="footer">FOOTER</footer>
      </div>
    );
  }
}

export default PageLayout;
