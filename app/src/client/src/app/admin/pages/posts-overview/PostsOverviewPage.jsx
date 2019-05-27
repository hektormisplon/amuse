import React, { Component } from "react";
import { /* Redirect , */ Route } from "react-router-dom";

import { ContentLayout } from "../../layouts";

// pages
import PostsTablePage from "../posts-table";
import PostFormPage from "../post-form";

const tabs = [
  { id: "List", link: "/admin/posts" },
  { id: "Create new post", link: "/admin/posts/create" }
];

class PostsOverviewPage extends Component {
  render() {
    const { children } = this.props;
    return (
      <ContentLayout title="Posts Overview" tabs={tabs}>
        {children}
        <Route exact path="/admin/posts" component={PostsTablePage} />
        <Route path="/admin/posts/create" component={PostFormPage} />
        <Route path="/admin/posts/:id/edit" component={PostFormPage} />
      </ContentLayout>
    );
  }
}

export default PostsOverviewPage;
