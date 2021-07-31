const axios = require('axios')

function fetchData() {
    const data = axios.get('https://jsonplaceholder.typicode.com/todos/')
    return data     
}

module.exports = fetchData;