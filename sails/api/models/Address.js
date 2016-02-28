/**
 * Address.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'adress',
  	attributes: {
  		street: {
  			type: 'string',
  			required: true
  		},
  		colonia: {
  			type: 'string',
  			required: true
  		},
  		city: {
  			type: 'string',
  			required: true
  		},
  		state: {
  			type: 'string',
  			required: true
  		},
  		zipcode: {
  			type: 'integer',
  			required: true
  		},
  		number: {
  			type: 'string'
  		},
  		location: {
  			model:'location'
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

