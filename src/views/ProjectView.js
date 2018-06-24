import React from "react";
import Layout from "../components/Layout/Layout";
import ImageComments from "../components/ImageComments/ImageComments"
import SidebarComments from "../components/SidebarComments/SidebarComments"
import ProjectSimilars from "../components/ProjectSimilars/ProjectSimilars"

const ProjectView = ({ match }) => (
  <Layout
    sidebar={<SidebarComments id={match.params.projectId}/>}
    content={<div>
      <ImageComments id={match.params.projectId}/>
      <ProjectSimilars />
    </div>
  }
  />
);

export default ProjectView;
