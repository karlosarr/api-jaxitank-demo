module.exports = {
  data: [
    {
      title: '✖️  👤 Shouldn´t delete a user because the ID is incorrect',
      id: '5c37c8f729329e2029703740',
      expect: expect400('The user not exist.')
    },
    {
      title: '✔️  👤 Should delete a user',
      id: '5c37c8f729329e2029703743',
      expect: expect200()
    }
  ]
};
