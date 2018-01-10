import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'

export default function (state={}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);

        case FETCH_POST:
            const test = { ...state, [action.payload.data.id]: action.payload.data };
            console.log("POST",test);
            
            return test;
        case FETCH_POSTS:
            const boo = _.mapKeys(action.payload.data, 'id');
            console.log("POSTSSS",boo);
            
            return boo;
        default:
            return state;
    }
}