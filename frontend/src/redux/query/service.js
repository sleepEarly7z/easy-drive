const getQueriedResult = async (query) => {
    const response = await fetch(`http://localhost:3001/recipes`, {
        method: 'GET'
    });
    return response.json();
}

const queryService = {
    getQueriedResult,
}

export default queryService;