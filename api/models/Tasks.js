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
      required: true,
      minLength: 2,
      maxLength: 100
    },
    details: {
      type: 'string',
      allowNull: true,
      minLength: 5,
      maxLength: 500
    },
    date: {
      type: 'string',
      columnType: 'datetime',
      allowNull: true
    },
    status: {
      type: 'string',
      defaultsTo: 'Pending',
      isIn: ['Pending', 'Finished']
    },
    // Foreign keys
    idUser: {
      model: 'Users',
      required: true
    }
  }
};
