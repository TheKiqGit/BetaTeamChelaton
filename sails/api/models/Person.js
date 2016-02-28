/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName:'person',
  	attributes: {
  		name : {
  			type: 'string',
  			required: true
  		},
  		lastname: {
  			type: 'string',
  			required: true
  		},
  		phone: {
  			type: 'integer',
  			required: true
  		},
  		middlename: {
  			type: 'string'
  		},
  		user: {
  			model: 'Users',
  			unique: true
  		},
  		birthday: {
  			type: 'date',
  			required: true
  		},
  		createdAt: {
  			type: 'date',
  			column_name: 'createdAt',
  			defaultsTo: function (){
  				return new Date();
  			}
  		},
  		updatedAt: {
  			type: 'date',
  			column_name: 'updatedAt',
  			defaultsTo: function (){
  				return new Date();
  			}
  		},
  		autoUpdatedAt:false,
  		autoCreatedAt:false
  	}
};

