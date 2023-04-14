import * as actionTypes from '../action/type';

export const todosReducers = (sate = [],action) => {
//state = periovious value , action = new value.
    switch (action.type) {
        case actionTypes.ADDNEW_TODO:
             return[action.payload, ...sate]


        default:
            return sate ;
          
    }

}
