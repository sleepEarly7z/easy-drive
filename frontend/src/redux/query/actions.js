const actionTypes = {
    UPDATE_QUERY: 'query/updateQuery'
}

const updateQuery = (query) => {
    return {
        type: actionTypes.UPDATE_QUERY,
        payload: query
    }
}

const actions = {
    updateQuery,
    actionTypes
}

export default actions;