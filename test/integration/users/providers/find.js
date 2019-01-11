module.exports = {
  data: [
    {
      title: '✖️  👤 Shouldn´t find a user because the params is incorrect',
      query: 'where={"name":"Carlos", "role":"Administrator"',
      expect: expect400('The params are invalid')
    },
    {
      title: '✖️  👤 Shouldn´t find a user because the params is incorrect',
      query: 'where={"nombre":"Carlos"}',
      expect: expect400('The params are invalid, verify the params')
    },
    {
      title: '✖️  👤 Shouldn´t find a user because the params is incorrect',
      query: 'where={"name":"Carlos"}&page=one&limit=15',
      expect: expect400('The page should be a number')
    },
    {
      title: '✖️  👤 Shouldn´t find a user because the params is incorrect',
      query: 'where={"name":"Carlos"}&page=1&limit=fifteen',
      expect: expect400('The limit should be a number')
    },
    {
      title: '✔️  👤 Should find a user',
      query: 'where={"name":"Carlos"}',
      expect: expect200()
    },
    {
      title: '✔️  👤 Should find a user',
      query: 'where={"name":"Carlos", "role":"Administrator"}&page=1&limit=15',
      expect: expect200()
    }
  ]
};
