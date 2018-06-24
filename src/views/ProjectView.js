import React from "react";
import Layout from "../components/Layout/Layout";
import ImageComments from "../components/ImageComments/ImageComments"
import SidebarComments from "../components/SidebarComments/SidebarComments"

const ProjectView = ({ match }) => (
  <Layout
    sidebar={<SidebarComments id={match.params.projectId}/>}
    content={<ImageComments id={match.params.projectId}/>}
  />
);

export default ProjectView;
