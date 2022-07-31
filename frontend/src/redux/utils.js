export const REQUEST_STATE = {
    IDLE: 'IDLE',
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
}

export const handleResponse = (response) => {
    if (response.ok) {
        return response.json();
    }

    const error = new Error('Service Error');
    error.status = response.status;
    error.response = response;

    throw error;
}