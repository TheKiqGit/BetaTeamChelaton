/**
 * Combos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	id      	: {type: 'int'},
    name    	: {type: 'string'},
    price    	: {type: 'float'},
    min_people  : {type: 'int'},
    max_people  : {type: 'int'}
  }
};

