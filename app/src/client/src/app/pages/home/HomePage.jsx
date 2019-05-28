import React, { Component } from 'react';

import Api from '../../services';
import PostsList from '../../components/posts-list';

// import GoldenLayout from '../../layouts/GoldenLayout';

class HomePage extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    this.loadPosts();
  }

  loadPosts = () => {
    Api.findAllPosts()
      .then(data => {
        this.setState(prevState => ({
          ...prevState,
          posts: data
        }));
      })
      .catch(error => {
        console.log(error);
      });
  };

  goToPostDetailPage = id => {
    this.props.history.push(`/news/${id}`);
  };

  render() {
    const { posts } = this.state;
    return (
      <React.Fragment>
        <div className="golden-grid_2">
          <h1 className="hidden">Let us be your guide.</h1>
          <h5>
            <br />
            Your own virtual museum tour guide. <br />
            Join & meet fellow visitors.
          </h5>
          <div>
            <h3>Our partners</h3>
            <div
              className="card-group"
              style={{
                display: 'flex',
                height: '38vh',
                justifyContent: 'space-between'
              }}
            >
              <div className="musea-card">
                <h5>S.M.A.K.</h5>
                <img src="https://picsum.photos/210" alt="" />
              </div>
              <div className="musea-card">
                <h5>Design Museum</h5>
                <img src="https://picsum.photos/210" alt="" />
              </div>
              <div className="musea-card">
                <h5>M.A.S.</h5>
                <img src="https://picsum.photos/210" alt="" />
              </div>
              <div className="musea-card">
                <h5>Some other</h5>
                <img src="https://picsum.photos/210" alt="" />
              </div>
            </div>
          </div>
          {/* <section className="section section--articles">
          <header className="section__header" />
          <div className="section__content section__content--articles">
          <PostsList posts={posts} onReadMore={this.goToPostDetailPage} />
          </div>
          <footer className="section__footer">READ MORE</footer>
        </section> */}
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
