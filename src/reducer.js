import { combineReducers } from 'redux';
import userMenulist from '@containers/sideContainer/user-menulist-reducer';
import exploreProgress from '@containers/exploreContainer/explore-progress-reducer';
import machineDisplay from '@containers/exploreContainer/explore-machine-display-reducer';

const rootReducer = combineReducers({
  userMenulist,
  exploreProgress,
  machineDisplay,
});

export default rootReducer;
