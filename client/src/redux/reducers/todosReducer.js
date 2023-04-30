import * as actionTypes from '../action/type';

export const todosReducers = (state = [], action) => {
//state = periovious value , action = new value.
switch (action.type) {
    case actionTypes.ADDNEW_TODO:
        return [action.payload, ...state]


             default:
                return state;
        }
    }