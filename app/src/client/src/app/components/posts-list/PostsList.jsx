import React, { Component } from 'react';
import classNames from 'classnames';

import './PostsList.sass';

class PostsLists extends Component {
  readMoreHandler = (ev, id) => {
    ev.preventDefault();
    if (typeof this.props.onReadMore === 'function') {
      this.props.onReadMore(id);
    }
  };
  render() {
    const { posts } = this.props;

    return (
      <React.Fragment>
        {posts &&
          posts.map((post, index) => (
            <article key={post.id} className={classNames('post-small')}>
              <h2 className="post_title">{post.title}</h2>
              <div className="post_synopsis">{post.synopsis}</div>
              <button onClick={ev => this.readMoreHandler(ev, post.id)}>
                Read more
              </button>
            </article>
          ))}
      </React.Fragment>
    );
  }
}

export default PostsLists;
