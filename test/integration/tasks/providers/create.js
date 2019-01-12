module.exports = {
  data: [
    {
      title: '✖️ 📌 Shouldn´t create a task because missing name',
      data: {},
      expect: expect400('The name is required')
    },
    {
      title: '✖️ 📌 Shouldn´t create a task because is boolean name',
      data: {
        name: true
      },
      expect: expect400('The name is required')
    },
    {
      title: '✖️ 📌 Shouldn´t create a task because is number name',
      data: {
        name: 911
      },
      expect: expect400('The name is required')
    },
    {
      title: '✖️  📌 Shouldn´t create a task because name is to short',
      data: {
        name: 'a'
      },
      expect: expect400('The name must be 2 to 50 chars')
    },
    {
      title: '✖️ 📌 Shouldn´t create a task because is boolean details',
      data: {
        name: 'Create a Meeting',
        details: true
      },
      expect: expect400('The details is required')
    },
    {
      title: '✖️ 📌 Shouldn´t create a task because is number details',
      data: {
        name: 'Create a Meeting',
        details: 911
      },
      expect: expect400('The details is required')
    },
    {
      title: '✖️  📌 Shouldn´t create a task because details is to short',
      data: {
        name: 'Create a Meeting',
        details: 'a'
      },
      expect: expect400('The details must be 5 to 500 chars')
    },
    {
      title: '✖️  📌 Shouldn´t create a task because date is invalid',
      data: {
        name: 'Create a Meeting',
        details: 'Make a tasks for meeting',
        date: 'monday'
      },
      expect: expect400('The date is invalid')
    },
    {
      title: '✖️  📌 Shouldn´t create a task because status is invalid',
      data: {
        name: 'Create a Meeting',
        details: 'Make a tasks for meeting',
        date: '2019-01-11T15:49:43.122Z',
        status: 'Finalizado'
      },
      expect: expect400('The status is incorrect')
    },
    {
      title: '✖️ 📌 Shouldn´t create a task because missing idUser',
      data: {
        name: 'Create a Meeting'
      },
      expect: expect400('The idUser is required')
    },
    {
      title: '✖️ 📌 Shouldn´t create a task because is boolean idUser',
      data: {
        name: 'Create a Meeting',
        idUser: true
      },
      expect: expect400('The idUser is required')
    },
    {
      title: '✖️ 📌 Shouldn´t create a task because is number idUser',
      data: {
        name: 'Create a Meeting',
        idUser: 911
      },
      expect: expect400('The idUser is required')
    },
    {
      title: '✖️  📌 Shouldn´t create a task because idUser not exist',
      data: {
        name: 'Create a Meeting',
        idUser: '5c37c8f729329e2029703740'
      },
      expect: expect400('The user not exist.')
    },
    {
      title: '✔️  📌 Shouldn´t create a task because name is to short',
      data: {
        name: 'Create a Meeting',
        idUser: '5c37c8f729329e2029703743'
      },
      expect: expect200()
    },
    {
      title: '✔️  📌 Shouldn´t create a task because name is to short',
      data: {
        name: 'Create a task',
        details: 'Make a tasks for meeting',
        date: '2019-01-11T15:49:43.122Z',
        status: 'Pending',
        idUser: '5c37c8f729329e2029703743'
      },
      expect: expect200()
    }
  ]
};
