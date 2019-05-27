import React from "react";
import Header from "../components/header/header.js";
import "./Page.sass";

class PageLayout extends React.Component {
  render() {
    return (
      <div className="page">
        <Header />
        <main className="main" role="main">
          {this.props.children}
        </main>
        <footer
          className="footer"
          style={{ fontFamily: "HKGrotesk", fontWeight: "normal" }}
        >
          FOOTER
        </footer>
      </div>
    );
  }
}

export default PageLayout;
