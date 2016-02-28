/**
 * Orders.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'orders',
  	attributes: {
  		user: {
  			model:'Users',
  			unique:true
  		},
  		address: {
  			model: 'Address'
  			unique:true
  		},
  		total: {
  			type:'float',
  			required:true
  		}
  		status: {
  			type:'integer',
  			required:true,
  			enum: [0, 1, 2]
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
  			},
  		summary: {
  			type: 'text'
  			required:true,
  		},
  		autoUpdatedAt:false,
  		autoCreatedAt:false
  	}
};

