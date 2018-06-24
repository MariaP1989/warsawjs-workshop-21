import React from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import SidebarTags from "../components/SidebarTags/SidebarTags";
import Layout from "../components/Layout/Layout";

const ProjectListView = ({ match }) => (
  <Layout
    sidebar={<SidebarTags id={match.params.projectId} />}
    content={<ProjectList id={match.params.projectId} />}
  />
);

export default ProjectListView;
