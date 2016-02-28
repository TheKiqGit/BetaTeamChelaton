/**
 * OrderItems.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName:'orders_items',
  	attributes: {
  		order: {
  			model:'Orders'
  		},
  		product: {
  			model:'Products'
  		},
  		quantity: {
  			type:'integer',
  			defaultsTo:1
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
  		autoUpdatedAt:false,
  		autoCreatedAt:false
  	}
};

