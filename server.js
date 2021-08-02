const axios = require('axios')

let fetchData = async () => {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return data;
}

module.exports = fetchData;