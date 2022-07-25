import actions from './actions';

const INITIAL_STATE = {
    filterBy: [],
    sortBy: null,
    searchBy: ''
}

const queryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.actionTypes.UPDATE_QUERY: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}

export default queryReducer;