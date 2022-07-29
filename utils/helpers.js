const toArray = (obj) => {
    return Array.isArray(obj) ? obj : [obj];
}

module.exports = {
    toArray
}