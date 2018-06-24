import React from "react";
import Layout from "../components/Layout/Layout";
import ImageComments from "../components/ImageComments/ImageComments"

const ProjectView = ({ match }) => (
  <Layout
    sidebar={<div> sidebar </div>}
    content={<div> <ImageComments id={match.params.projectId}/> </div>}
  />
);

export default ProjectView;
