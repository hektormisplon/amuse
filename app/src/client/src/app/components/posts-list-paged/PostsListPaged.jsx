import React, { Component } from 'react';
import classNames from 'classnames';

import './PostsListPaged.sass';

class PostsListsPaged extends Component {
  readMoreHandler = (ev, id) => {
    ev.preventDefault();
    if (typeof this.props.onReadMore === 'function') {
      this.props.onReadMore(id);
    }
  };
  loadMoreHandler = (ev, pageIndex) => {
    ev.preventDefault();
    if (typeof this.props.onLoadMore === 'function') {
      this.props.onLoadMore(pageIndex);
    }
  };
  render() {
    const { posts, pagination } = this.props;

    return (
      <React.Fragment>
        {posts &&
          posts.map((post, index) => (
            <article key={post.id} className={classNames('post--small')}>
              <h2 className="post__title">{post.title}</h2>
              <div className="post__synopsis">{post.synopsis}</div>
              <button onClick={ev => this.readMoreHandler(ev, post.id)}>
                Read more
              </button>
            </article>
          ))}
        {posts && pagination.page < pagination.pages ? (
          <button onClick={ev => this.loadMoreHandler(ev, pagination.page + 1)}>
            See more posts
          </button>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }
}

export default PostsListsPaged;
