/**
 * Products.js
 *
 * @description :: This model stores the product's data.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName:'products',
	autoCreatedAt: false,
  	autoUpdatedAt: false,
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

