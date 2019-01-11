/**
 * validatePassword
 *
 * @module      :: Helper
 * @description :: validate password
 * @docs        :: https://sailsjs.com/documentation/concepts/helpers
 *
 */

const bcrypt = require('bcrypt');

module.exports = {
  friendlyName: 'Validate a password',

  description: '',

  inputs: {
    password: {
      type: 'string',
      required: true
    },
    passwordEncrypt: {
      type: 'string',
      required: true
    }
  },

  exits: {},

  fn: async function(inputs, exits) {
    const res = await bcrypt.compareSync(
      inputs.password,
      inputs.passwordEncrypt
    );
    return exits.success(res);
  }
};
