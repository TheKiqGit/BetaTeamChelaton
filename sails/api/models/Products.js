/**
 * Products.js
 *
 * @description :: This model stores the product's data.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {

  	tableName: 'products',
  	id: {
  		type: 'integer',
  		unique: true,
  		primaryKey: true
  	},
  	name: {
  		type: 'string',
  		defaultsTo: 'cervezaTmp'
  	},
  	price: {
  		type: 'float',
  		defaultsTo: 0
  	},
  	type: {
  		type: 'string',
  		defaultsTo: 'ambar',
  		enum : ['ambar', 'oscura', 'clara', 'lager']
  	},
  	createdAt: {
  		type: 'date',
  		defaultsTo: function (){
  			return new Date().toLocaleString();
  		}
  	},
  	updatedAt: {
  		type: 'date',
  		defaultsTo: function (){
  			return new Date().toLocaleString();
  		}
  	}
  }
};

