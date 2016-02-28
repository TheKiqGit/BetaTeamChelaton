/**
 * Products.js
 *
 * @description :: This model stores the product's data.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName:'products',
  	attributes: {
  		name: {
  			type: 'string',
  			defaultsTo: 'cervezaTmp'
  		},
  		price: {
  			type: 'float',
  			defaultsTo: 0.0
  		},
  		type: {
  			type: 'string',
  			defaultsTo: 'ambar',
  			enum : ['ambar', 'oscura', 'clara', 'lager']
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
  		autoCreatedAt: false,
  		autoUpdatedAT: false
  		},
  	}
};

