/**
 * OrderItems.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	autoCreatedAt: false,
  	autoUpdatedAt: false,
	tableName:'orders_items',
  	attributes: {
  		owner: {
  			model:'Orders'
  		},
  		product: {
  			model:'Products'
  		},
  		quantity: {
  			type:'integer',
  			defaultsTo:1
  		}
  	}
};

