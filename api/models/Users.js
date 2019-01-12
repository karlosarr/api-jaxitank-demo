/**
 * Users.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const bcrypt = require('bcrypt');
module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    status: {
      type: 'string',
      defaultsTo: 'Pending',
      isIn: ['Active', 'Pending', 'Banned', 'Inactive']
    },
    phone: {
      type: 'string',
      required: true,
      custom: function(value) {
        return _.isString(value) && value.length >= 10 && value.length <= 15;
      }
    },
    role: {
      type: 'string',
      defaultsTo: 'Guest',
      isIn: ['Guest', 'Member', 'Staff', 'Administrator']
    },
    password: {
      type: 'string',
      required: true
    }
  },
  beforeCreate: (user, next) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
    return next(false, user);
  },

  beforeUpdate: (user, next) => {
    if (user.hasOwnProperty('password')) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
      return next(false, user);
    } else {
      return next(null, user);
    }
  }
};
