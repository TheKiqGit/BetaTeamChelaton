/**
 * Orders.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	autoCreatedAt: false,
  	autoUpdatedAt: false,
	tableName: 'orders',
  	attributes: {
  		user: {
  			model:'Users',
  			unique: true
  		},
  		address: {
  			model: 'Address',
  			unique: true
  		},
  		total: {
  			type:'float'
  		},
  		status: {
  			type:'integer'
  		},
  		orderItems: {
  			collection: 'OrderItems',
  			via:'orders'
  		},
  		summary: {
  			type:'text'
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

