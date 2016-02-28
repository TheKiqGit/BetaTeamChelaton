/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName:'users',
  	attributes: {
  		email: {
  			type: 'string',
  			required: true
  		},
  		facebook_token: {
  			type: 'string',
  			defaultsTo: ''
  		},
  		password: {
  			type: 'string',
  			required: true
  		},
  		person: {
  			collection: 'Person',
  			via: 'owner'
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

