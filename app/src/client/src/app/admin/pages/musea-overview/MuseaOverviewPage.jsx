import React, { Component } from "react";
import { /* Redirect, */ Route } from "react-router-dom";

import { ContentLayout } from "../../layouts";

//pages
import MuseaTablePage from "../musea-table";
import MuseumFormPage from "../museum-form";

const tabs = [
  { id: "List", link: "/admin/musea" },
  { id: "Create new museum", link: "/admin/musea/create" }
];

class MuseaOverviewPage extends Component {
  render() {
    const { children } = this.props;
    return (
      <ContentLayout title="Musea Overview" tabs={tabs}>
        {children}
        <Route exact path="/admin/musea" component={MuseaTablePage} />
        <Route path="/admin/musea/create" component={MuseumFormPage} />
        <Route path="/admin/musea/:id/edit" component={MuseumFormPage} />
      </ContentLayout>
    );
  }
}

export default MuseaOverviewPage;
