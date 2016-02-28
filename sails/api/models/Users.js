/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	autoCreatedAt: false,
  	autoUpdatedAt: false,
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
  			model: 'Person'
  		},
  		createdAt: {
  			type: 'date',
  			columnName: 'createdAt',
  			defaultsTo: function (){
  				return new Date();
  			}
  		},
  		updatedAt: {
  			type: 'date',
  			columnName: 'updatedAt',
  			defaultsTo: function (){
  				return new Date();
  			}
  		}
  	}
};

