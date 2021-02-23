import {
  GET_EXPLORE_PROGRESS_SUCCESS,
  GET_EXPLORE_PROGRESS_PENDING,
  GET_EXPLORE_PROGRESS_FAILED,
} from '@actions/action-types';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPLORE_PROGRESS_SUCCESS:
      return { ...state, status: 'SUCCESS', payload: action.payload };
    case GET_EXPLORE_PROGRESS_PENDING:
      return { status: 'PENDING' };
    case GET_EXPLORE_PROGRESS_FAILED:
      return { status: 'ERROR' };
    default:
      return state;
  }
};
