import {
  GET_USER_MENULIST_SUCCESS,
  GET_USER_MENULIST_PENDING,
  GET_USER_MENULIST_FAILED,
} from '@actions/action-types';

const initialState = {};

const userMenulist = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_MENULIST_SUCCESS:
      return { ...state, status: 'SUCCESS', payload: action.payload };
    case GET_USER_MENULIST_PENDING:
      return { status: 'PENDING' };
    case GET_USER_MENULIST_FAILED:
      return { status: 'ERROR' };
    default:
      return state;
  }
};
export default userMenulist;
