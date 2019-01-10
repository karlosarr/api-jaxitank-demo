/**
 * Users.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
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
        return (
          (_.isString(value) && value.length >= 10 && value.length <= 15) ||
          value.length === 32
        );
      }
    },
    role: {
      type: 'string',
      defaultsTo: 'Pending',
      isIn: ['Guest', 'Member', 'Staff']
    }
  }
};
