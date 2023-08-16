import { ADD_POSITONS } from './position-actions';

export const positionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITONS: {
      return action.positions;
    }
    default: {
      return state;
    }
  }
};
