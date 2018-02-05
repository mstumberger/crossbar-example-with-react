import { combineReducers } from 'redux';
import { RESULT, EVENT } from 'redux-autobahn-js/src/types';

const rpc = (state = [], action) => {
  // console.log('action', action.type, action);
  // eslint-disable-next-line
  switch(action.type) {
      case RESULT: {
        console.log('reducer-rpc', action.result);
        return [...state, action.result]
      }
  }

  return state;
};

const pubsub = (state = [], action) => {
    // console.log('action', action.type, action);
    // eslint-disable-next-line
    switch(action.type){
         case EVENT: {
        console.log('reducer-pubsub', action.args);
        return [...state, action.args]
    }
    }
    return state;
};

export default combineReducers({
    rpc,
    pubsub,
});