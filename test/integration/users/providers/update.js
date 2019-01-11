module.exports = {
  data: [
    {
      title: '✖️  👤 Shouldn´t update a user because the ID is incorrect',
      id: '5c37c8f729329e2029703740',
      data: {},
      expect: expect400('The user not exist.')
    },
    {
      title: '✖️ 👤 Shouldn´t update a user because is boolean name',
      id: '5c37c8f729329e2029703743',
      data: {
        name: true
      },
      expect: expect400('The name is required')
    },
    {
      title: '✖️ 👤 Shouldn´t update a user because is number name',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 911
      },
      expect: expect400('The name is required')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because name is to short',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'a'
      },
      expect: expect400('The name must be 2 to 50 chars')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because  name is to long',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Lorem ipsum dolor sit amet, mundi oratio definitionem'
      },
      expect: expect400('The name must be 2 to 50 chars')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because lastName is boolean',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: true
      },
      expect: expect400('The lastName is required')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because lastName is number',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 1232
      },
      expect: expect400('The lastName is required')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because lastName is to short',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'a'
      },
      expect: expect400('The lastName must be 2 to 50 chars')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because lastName is to long',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Lorem ipsum dolor sit amet, mundi oratio definitionem'
      },
      expect: expect400('The lastName must be 2 to 50 chars')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because status is incorrect',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        status: 'hi'
      },
      expect: expect400('The status is incorrect')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because status is boolean',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        status: true
      },
      expect: expect400('The status is incorrect')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because status is number',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        status: 2132
      },
      expect: expect400('The status is incorrect')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because phone is number',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        status: 'Pending',
        phone: 6699801010
      },
      expect: expect400('The phone is required')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because phone is boolean',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        status: 'Pending',
        phone: true
      },
      expect: expect400('The phone is required')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because phone is incorrenct',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        status: 'Pending',
        phone: '+9801010'
      },
      expect: expect400("The phone isn't valid")
    },
    {
      title: '✖️  👤 Shouldn´t update a user because phone is missing `+`',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        status: 'Pending',
        phone: '5216699801010'
      },
      expect: expect400("The phone isn't valid")
    },
    {
      title: '✖️  👤 Shouldn´t update a user because role is incorrect',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        status: 'Pending',
        phone: '+5216699801010',
        role: 'hi'
      },
      expect: expect400('The role is incorrect')
    },
    {
      title: '✖️  👤 Shouldn´t update a user because role is boolean',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        status: 'Pending',
        phone: '+5216699801010',
        role: true
      },
      expect: expect400('The role is incorrect')
    },
    {
      title: '✖️  👤  Shouldn´t update a user because role is number',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        status: 'Pending',
        phone: '+5216699801010',
        role: 434
      },
      expect: expect400('The role is incorrect')
    },
    {
      title: '✖️ 👤 Shouldn´t update a user password is boolean',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        phone: '+5216699801010',
        password: true
      },
      expect: expect400('The password is required')
    },
    {
      title: '✖️ 👤 Shouldn´t update a user password is number',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        phone: '+5216699801010',
        password: 213
      },
      expect: expect400('The password is required')
    },
    {
      title: '✖️ 👤 Shouldn´t update a user password is to short',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        phone: '+5216699801010',
        password: '1234'
      },
      expect: expect400('The password must be 8 to 100 chars')
    },
    {
      title: '✖️ 👤 Shouldn´t update a user password is to long',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        phone: '+5216699801010',
        password:
          'Lorem ipsum dolor sit amet, mundi oratio definitionem in sea. Ne qui alii natum, eum rebum nostro inimicus ad. An prima debitis duo'
      },
      expect: expect400('The password must be 8 to 100 chars')
    },
    {
      title: '✖️ 👤 Shouldn´t update a user without passwordConfirm',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        phone: '+5216699801010',
        password: 'P@$$w0rd'
      },
      expect: expect400('The passwordConfirm is required')
    },
    {
      title: '✖️ 👤 Shouldn´t update a user passwordConfirm is boolean',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm: true
      },
      expect: expect400('The passwordConfirm is required')
    },
    {
      title: '✖️ 👤 Shouldn´t update a user passwordConfirm is number',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm: 213
      },
      expect: expect400('The passwordConfirm is required')
    },
    {
      title: '✖️ 👤 Shouldn´t update a user passwordConfirm is to short',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm: '1234'
      },
      expect: expect400('The passwordConfirm must be 8 to 100 chars')
    },
    {
      title: '✖️ 👤 Shouldn´t update a user passwordConfirm is to long',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm:
          'Lorem ipsum dolor sit amet, mundi oratio definitionem in sea. Ne qui alii natum, eum rebum nostro inimicus ad. An prima debitis duo'
      },
      expect: expect400('The passwordConfirm must be 8 to 100 chars')
    },
    {
      title: '✖️ 👤 Shouldn´t update a user passwordConfirm not equals',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm: 'P@$$w0rd2'
      },
      expect: expect400('The passwords must be equal')
    },
    {
      title: '✔️  👤 Should update a user',
      id: '5c37c8f729329e2029703743',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        status: 'Active',
        phone: '+5216699801010',
        role: 'Member',
        password: 'P@$$w0rd',
        passwordConfirm: 'P@$$w0rd'
      },
      expect: expect200()
    }
  ]
};
