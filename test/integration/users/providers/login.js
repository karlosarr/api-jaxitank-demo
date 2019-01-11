module.exports = {
  data: [
    {
      title: '✖️  👤 Shouldn´t login a user without params',
      data: {},
      expect: expect400('The email is required')
    },
    {
      title: '✖️  👤 Shouldn´t login a user the email is boolean',
      data: {
        email: true
      },
      expect: expect400('The email is required')
    },
    {
      title: '✖️  👤 Shouldn´t login a user the email is number',
      data: {
        email: 434
      },
      expect: expect400('The email is required')
    },
    {
      title: '✖️  👤 Shouldn´t login a user without password',
      data: {
        email: 'karlosarr@gmail.com'
      },
      expect: expect400('The password is required')
    },
    {
      title: '✖️  👤 Shouldn´t login a user the password is boolean',
      data: {
        email: 'karlosarr@gmail.com',
        password: true
      },
      expect: expect400('The password is required')
    },
    {
      title: '✖️  👤 Shouldn´t login a user the password is number',
      data: {
        email: 'karlosarr@gmail.com',
        password: 434
      },
      expect: expect400('The password is required')
    },
    {
      title: '✖️  👤 Shouldn´t login a user not exist',
      data: {
        email: 'karlosarr@yahoo.com',
        password: 'password'
      },
      expect: expect400('The email or password are incorrect.')
    },
    {
      title: '✖️  👤 Shouldn´t login a user incorrect password',
      data: {
        email: 'karlosarr@gmail.com',
        password: 'password'
      },
      expect: expect400('The email or password are incorrect.')
    },
    {
      title: '✔️  👤 Should login a user',
      data: {
        email: 'karlosarr@gmail.com',
        password: 'P@$$w0rd'
      },
      expect: expect200()
    }
  ]
};
