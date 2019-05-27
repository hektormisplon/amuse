import React, { Component } from "react";
import { Route } from "react-router-dom";

import BlogsOverviewPage from "../blogs-overview";
import CategoriesOverviewPage from "../categories-overview";
import PostsOverviewPage from "../posts-overview";
import MuseaOverviewPage from "../musea-overview";

class AdminPage extends Component {
  render() {
    return (
      <div className="Admin">
        <Route path="/admin/blogs" component={BlogsOverviewPage} />
        <Route path="/admin/categories" component={CategoriesOverviewPage} />
        <Route path="/admin/posts" component={PostsOverviewPage} />
        <Route path="/admin/musea" component={MuseaOverviewPage} />
      </div>
    );
  }
}

export default AdminPage;
