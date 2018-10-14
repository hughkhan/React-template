/**
 * Created by Hugh on 10/13/2018.
 */
import * as types from '../actions/ActionTypes';

const initialState = {
    post: []
};

const postReducer = function(state = initialState, action) {

    switch (action.type) {
        case types.ADD_POST:
            state.post.push(action.post);
            return state;
            break;
        default: return state;
    }
};

export default postReducer;