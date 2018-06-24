import { uniqBy } from "lodash";

export const getProject = (state, props) => state.project.data[props.id - 1] || {};

export const getProjectPoints = (state, props) => {
  const project = getProject(state, props)
  const { comments = [] } = project;
  const points = comments.map(({ x, y }) => ({ x, y }));
  const uniqPoints = uniqBy(points, ({ x, y }) => `${x}-${y}`);
  return uniqPoints;
}
