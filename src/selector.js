import { uniqBy } from "lodash";
import { createSelector } from "reselect";

export const getProject = (state, props) => state.project.data[props.id - 1] || {};

export const getProjectPoints = (state, props) => {
  const project = getProject(state, props)
  const { comments = [] } = project;
  const points = comments.map(({ x, y }) => ({ x, y }));
  const uniqPoints = uniqBy(points, ({ x, y }) => `${x}-${y}`);
  return uniqPoints;
}

export const getSelectedPoint = (state, props) => state.selectedPoint.point

export const getFiltredComments = createSelector(
  getProject,
  getSelectedPoint,
  (project, point) => {
    console.warn({ point });
    const { comments = [] } = project;
    if (!point) return comments;
    const filterdComments = comments.filter(
      ({ x, y }) => `${x}-${y}` === `${point.x}-${point.y}`
    );
    return filterdComments;
  }
);

export const getShops = (state) => state.shops
export const getSimilars = state => state.similars;
