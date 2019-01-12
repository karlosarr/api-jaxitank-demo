module.exports = {
  data: [
    {
      title: '✖️  📌 Shouldn´t find a task because the params is incorrect',
      query: 'where={"idUser":"5c37c8f729329e2029703743"',
      expect: expect400('The params are invalid')
    },
    {
      title: '✖️  📌 Shouldn´t find a task because the params is incorrect',
      query: 'where={"user":"5c37c8f729329e2029703743"}',
      expect: expect400('The params are invalid, verify the params')
    },
    {
      title: '✖️  📌 Shouldn´t find a task because the params is incorrect',
      query: 'where={"idUser":"5c37c8f729329e2029703743"}&page=one&limit=15',
      expect: expect400('The page should be a number')
    },
    {
      title: '✖️  📌 Shouldn´t find a task because the params is incorrect',
      query: 'where={"idUser":"5c37c8f729329e2029703743"}&page=1&limit=fifteen',
      expect: expect400('The limit should be a number')
    },
    {
      title: '✔️  📌 Should find a task',
      query: 'where={"idUser":"5c37c8f729329e2029703743"}',
      expect: expect200()
    }
  ]
};
