module.exports = {
  data: [
    {
      title: '✖️ 👤 Shouldn´t create a user because missing name',
      data: {},
      expect: expect400('The name is required')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user because is boolean name',
      data: {
        name: true
      },
      expect: expect400('The name is required')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user because is number name',
      data: {
        name: 911
      },
      expect: expect400('The name is required')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because name is to short',
      data: {
        name: 'a'
      },
      expect: expect400('The name must be 2 to 50 chars')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because  name is to long',
      data: {
        name: 'Lorem ipsum dolor sit amet, mundi oratio definitionem'
      },
      expect: expect400('The name must be 2 to 50 chars')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because missing lastName',
      data: {
        name: 'Carlos'
      },
      expect: expect400('The lastName is required')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because lastName is boolean',
      data: {
        name: 'Carlos',
        lastName: true
      },
      expect: expect400('The lastName is required')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because lastName is number',
      data: {
        name: 'Carlos',
        lastName: 1232
      },
      expect: expect400('The lastName is required')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because lastName is to short',
      data: {
        name: 'Carlos',
        lastName: 'a'
      },
      expect: expect400('The lastName must be 2 to 50 chars')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because lastName is to long',
      data: {
        name: 'Carlos',
        lastName: 'Lorem ipsum dolor sit amet, mundi oratio definitionem'
      },
      expect: expect400('The lastName must be 2 to 50 chars')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because missing email',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz'
      },
      expect: expect400('The email is required')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because email is boolean',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: true
      },
      expect: expect400('The email is required')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because email is number',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 3342
      },
      expect: expect400('The email is required')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because email is to short',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'a@a'
      },
      expect: expect400('The email must be 5 to 70 chars')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because email is to long',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email:
          'Lorem ipsum dolor sit amet, mundi oratio definitionem in sea. Ne qui alii natum'
      },
      expect: expect400('The email must be 5 to 70 chars')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because email is incorrect',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'myemail.com'
      },
      expect: expect400('The email isn´t valid')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because status is incorrect',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@gmail.com',
        status: 'hi'
      },
      expect: expect400('The status is incorrect')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because status is boolean',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@gmail.com',
        status: true
      },
      expect: expect400('The status is incorrect')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because status is number',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@gmail.com',
        status: 2132
      },
      expect: expect400('The status is incorrect')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because phone is required',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@gmail.com',
        status: 'Pending'
      },
      expect: expect400('The phone is required')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because phone is number',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@gmail.com',
        status: 'Pending',
        phone: 6699801010
      },
      expect: expect400('The phone is required')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because phone is boolean',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@gmail.com',
        status: 'Pending',
        phone: true
      },
      expect: expect400('The phone is required')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because phone is incorrenct',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@gmail.com',
        status: 'Pending',
        phone: '+9801010'
      },
      expect: expect400("The phone isn't valid")
    },
    {
      title: '✖️  👤 Shouldn´t create a user because phone is missing `+`',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@gmail.com',
        status: 'Pending',
        phone: '5216699801010'
      },
      expect: expect400("The phone isn't valid")
    },
    {
      title: '✖️  👤 Shouldn´t create a user because role is incorrect',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@gmail.com',
        status: 'Pending',
        phone: '+5216699801010',
        role: 'hi'
      },
      expect: expect400('The role is incorrect')
    },
    {
      title: '✖️  👤 Shouldn´t create a user because role is boolean',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@gmail.com',
        status: 'Pending',
        phone: '+5216699801010',
        role: true
      },
      expect: expect400('The role is incorrect')
    },
    {
      title: '✖️  👤  Shouldn´t create a user because role is number',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@gmail.com',
        status: 'Pending',
        phone: '+5216699801010',
        role: 434
      },
      expect: expect400('The role is incorrect')
    },
    {
      title: '✖️  👤 Shouldn´t create a user without Password',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr0@gmail.com',
        phone: '+5216699801010'
      },
      expect: expect400('The password is required')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user password is boolean',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr0@gmail.com',
        phone: '+5216699801010',
        password: true
      },
      expect: expect400('The password is required')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user password is number',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr0@gmail.com',
        phone: '+5216699801010',
        password: 213
      },
      expect: expect400('The password is required')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user password is to short',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr0@gmail.com',
        phone: '+5216699801010',
        password: '1234'
      },
      expect: expect400('The password must be 8 to 100 chars')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user password is to long',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr0@gmail.com',
        phone: '+5216699801010',
        password:
          'Lorem ipsum dolor sit amet, mundi oratio definitionem in sea. Ne qui alii natum, eum rebum nostro inimicus ad. An prima debitis duo'
      },
      expect: expect400('The password must be 8 to 100 chars')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user without passwordConfirm',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr0@gmail.com',
        phone: '+5216699801010',
        password: 'P@$$w0rd'
      },
      expect: expect400('The passwordConfirm is required')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user passwordConfirm is boolean',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr0@gmail.com',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm: true
      },
      expect: expect400('The passwordConfirm is required')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user passwordConfirm is number',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr0@gmail.com',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm: 213
      },
      expect: expect400('The passwordConfirm is required')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user passwordConfirm is to short',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr0@gmail.com',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm: '1234'
      },
      expect: expect400('The passwordConfirm must be 8 to 100 chars')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user passwordConfirm is to long',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr0@gmail.com',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm:
          'Lorem ipsum dolor sit amet, mundi oratio definitionem in sea. Ne qui alii natum, eum rebum nostro inimicus ad. An prima debitis duo'
      },
      expect: expect400('The passwordConfirm must be 8 to 100 chars')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user passwordConfirm not equals',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr0@gmail.com',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm: 'P@$$w0rd2'
      },
      expect: expect400('The passwords must be equal')
    },
    {
      title: '✖️ 👤 Shouldn´t create a user the emails already exist',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@hotmail.com',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm: 'P@$$w0rd'
      },
      expect: expect400('The email is already registered.')
    },
    {
      title: '✔️ 👤 Should create a user without status (default: Pending)',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr0@gmail.com',
        phone: '+5216699801010',
        role: 'Member',
        password: 'P@$$w0rd',
        passwordConfirm: 'P@$$w0rd'
      },
      expect: expect200()
    },
    {
      title: '✔️  👤 Should create a user without role (default: Guest)',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr1@gmail.com',
        status: 'Active',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm: 'P@$$w0rd'
      },
      expect: expect200()
    },
    {
      title: '✔️  👤 Should create a user without role and status',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr2@gmail.com',
        phone: '+5216699801010',
        password: 'P@$$w0rd',
        passwordConfirm: 'P@$$w0rd'
      },
      expect: expect200()
    },
    {
      title: '✔️  👤 Should create a user',
      data: {
        name: 'Carlos',
        lastName: 'Ruiz',
        email: 'karlosarr@gmail.com',
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
