const fetchData = require('./server.js')

test('fetch data from json placeholder', async () => {
  const data = await fetchData()
  expect(data).toEqual(  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },)
})
