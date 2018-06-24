import React from "react";
import { Label } from "semantic-ui-react";
// import TagsItem from "./../components/TagsItem";

const TagsList = ({ tags }) => {
  return (
    <Label.Group>
      {tags.map(element => <Label> {element} </Label>)}
    </Label.Group>
  );
};

TagsList.defaultProps = {
  tags: []
};

export default TagsList;
