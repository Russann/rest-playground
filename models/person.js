'use strict';

export default {
  identity: 'person',
  connection: 'default',
  attributes: {
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    gender: {
      type: 'string',
      enum: ['M', 'F']
    },
    pets: {
      collection: 'pet',
      via: 'owner'
    }
  }
};