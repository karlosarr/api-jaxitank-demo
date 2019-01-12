module.exports = {
  data: [
    {
      title: '✖️  📌 Shouldn´t find a task because the ID is incorrect',
      id: '5c37c8f729329e2029703740',
      expect: expect400('The task not exist.')
    },
    {
      title: '✔️  📌 Should task a user',
      id: '5c38f2700eff301308eef60f',
      expect: expect200()
    }
  ]
};
