import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { AdminLayout } from './admin/layouts';
import AdminPage from './admin/pages/admin';
// layouts
import { LoginLayout, PageLayout } from './layouts';
import SignupPage from './pages/auth/SignupPage';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import NewsPage from './pages/news';
import PostDetailPage from './pages/post-detail';
// utilities
import { RouteWithLayout } from './utilities';

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
            path="/auth"
            layout={LoginLayout}
            component={SignupPage}
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
