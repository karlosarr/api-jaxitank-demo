module.exports = {
  data: [
    {
      title: '✖️ 📌 Shouldn´t Update a task not exist',
      id: '5c38f2700eff301308eef600',
      data: {},
      expect: expect400('The task not exist.')
    },
    {
      title: '✖️ 📌 Shouldn´t Update a task because is boolean name',
      id: '5c38f2700eff301308eef60f',
      data: {
        name: true
      },
      expect: expect400('The name is required')
    },
    {
      title: '✖️ 📌 Shouldn´t Update a task because is number name',
      id: '5c38f2700eff301308eef60f',
      data: {
        name: 911
      },
      expect: expect400('The name is required')
    },
    {
      title: '✖️  📌 Shouldn´t Update a task because name is to short',
      id: '5c38f2700eff301308eef60f',
      data: {
        name: 'a'
      },
      expect: expect400('The name must be 2 to 50 chars')
    },
    {
      title: '✖️ 📌 Shouldn´t Update a task because is boolean details',
      id: '5c38f2700eff301308eef60f',
      data: {
        name: 'Update a Meeting',
        details: true
      },
      expect: expect400('The details is required')
    },
    {
      title: '✖️ 📌 Shouldn´t Update a task because is number details',
      id: '5c38f2700eff301308eef60f',
      data: {
        name: 'Update a Meeting',
        details: 911
      },
      expect: expect400('The details is required')
    },
    {
      title: '✖️  📌 Shouldn´t Update a task because details is to short',
      id: '5c38f2700eff301308eef60f',
      data: {
        name: 'Update a Meeting',
        details: 'a'
      },
      expect: expect400('The details must be 5 to 500 chars')
    },
    {
      title: '✖️  📌 Shouldn´t Update a task because date is invalid',
      id: '5c38f2700eff301308eef60f',
      data: {
        name: 'Update a Meeting',
        details: 'Make a tasks for meeting',
        date: 'monday'
      },
      expect: expect400('The date is invalid')
    },
    {
      title: '✖️  📌 Shouldn´t Update a task because status is invalid',
      id: '5c38f2700eff301308eef60f',
      data: {
        name: 'Update a Meeting',
        details: 'Make a tasks for meeting',
        date: '2019-01-11T15:49:43.122Z',
        status: 'Finalizado'
      },
      expect: expect400('The status is incorrect')
    },
    {
      title: '✔️  📌 Shouldn´t Update a task',
      id: '5c38f2700eff301308eef60f',
      data: {
        name: 'Update a task',
        details: 'Make a tasks for meeting',
        date: '2019-01-11T15:49:43.122Z',
        status: 'Pending'
      },
      expect: expect200()
    },
    {
      title: '✔️  📌 Shouldn´t Update a task mask with Finished',
      id: '5c38f2700eff301308eef60f',
      data: {
        status: 'Finished'
      },
      expect: expect200()
    }
  ]
};
