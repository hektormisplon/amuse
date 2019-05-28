import React, { Component } from 'react';
import Parser from 'html-react-parser';
import classNames from 'classnames';

import './PostDetail.sass';

class PostDetail extends Component {
  render() {
    const { data: post } = this.props;
    return (
      <React.Fragment>
        {post ? (
          <article key={post.id} className={classNames('post-large')}>
            <h2 className="post_title">{post.title}</h2>
            <div className="post_synopsis">{post.synopsis}</div>
            <div className="post_body">{Parser(post.body)}</div>
          </article>
        ) : (
          <p>LOADING</p>
        )}
      </React.Fragment>
    );
  }
}

export default PostDetail;
