const fetchData = require('./server.js')


test('type of data should be an object', () => {
  return fetchData().then(({data}) => {
    expect(data).toContainEqual({
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },)
  })
})
