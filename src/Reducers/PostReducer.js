/**
 * Created by Hugh on 10/13/2018.
 */
import * as types from '../actions/ActionTypes';

const initialState = {
    posts: []
};

const postReducer = function(state = initialState, action) {

    switch (action.type) {
        case types.ADD_POST:
            let _state = state;
            _state.posts.push(action.post);
            Object.assign({},state,_state);
//            return state.posts.push(action.post);
            break;
        default: return state;
    }
};

export default postReducer;