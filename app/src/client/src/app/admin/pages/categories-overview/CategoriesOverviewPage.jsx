import React, { Component } from "react";
// import { Redirect, Route } from 'react-router-dom';

import { ContentLayout } from "../../layouts";

// pages

// import PostsTablePage from '../posts-table';
// import PostFormPage from '../post-form';
// import MuseaTablePage from '../musea-table';
// import MuseumFormPage from '../museum-form';

const tabs = [
  { id: "List", link: "/admin/categories" },
  { id: "Create new category", link: "/admin/categories/create" }
];

class CategoriesOverviewPage extends Component {
  render() {
    const { children } = this.props;
    return (
      <ContentLayout title="Categories Overview" tabs={tabs}>
        {children}
      </ContentLayout>
    );
  }
}

export default CategoriesOverviewPage;
