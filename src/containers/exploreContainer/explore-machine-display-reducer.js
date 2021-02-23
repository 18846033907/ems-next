import {
  GET_MACHINE_DISPLAY_SUCCESS,
  GET_MACHINE_DISPLAY_PENDING,
  GET_MACHINE_DISPLAY_FAILED,
} from '@actions/action-types';

const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MACHINE_DISPLAY_SUCCESS:
      return { ...state, status: 'SUCCESS', payload: action.payload };
    case GET_MACHINE_DISPLAY_PENDING:
      return { status: 'PENDING' };
    case GET_MACHINE_DISPLAY_FAILED:
      return { status: 'ERROR' };
    default:
      return state;
  }
};
