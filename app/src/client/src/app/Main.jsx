import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router-dom';

// utilities
import { RouteWithLayout } from './utilities';

// layouts
import { LoginLayout, PageLayout } from './layouts';
import { AdminLayout } from './admin/layouts';

import HomePage from './pages/home';
import AdminPage from './admin/pages/admin';
import LoginPage from './pages/login';
import NewsPage from './pages/news';
import PostDetailPage from './pages/post-detail';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <RouteWithLayout
            exact
            path="/"
            layout={PageLayout}
            component={HomePage}
          />
          <Redirect from="/home" to="/" />
          <RouteWithLayout
            exact
            path="/news"
            layout={PageLayout}
            component={NewsPage}
          />
          <RouteWithLayout
            exact
            path="/news/:id"
            layout={PageLayout}
            component={PostDetailPage}
          />
          <RouteWithLayout
            path="/login"
            layout={LoginLayout}
            component={LoginPage}
          />
          <RouteWithLayout
            path="/admin"
            layout={AdminLayout}
            component={AdminPage}
          />
        </Switch>
      </div>
    );
  }
}

export default Main;
