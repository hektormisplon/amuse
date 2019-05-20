import React from 'react';
/*
Import styling
*/
import logo from '../assets/logo/logo.svg';
import Header from '../components/header/header.js'
import './Page.sass';

class PageLayout extends React.Component {
    render() {
        const { children, classes } = this.props;

        return (
            <div className="page">
                <Header />
                <main className="main" role="main">
                    { children }
                </main>
                <footer className="footer" role="footer">
                    FOOTER
                </footer>
            </div>
        )
    }
}
 
export default PageLayout;