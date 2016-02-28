/**
 * Location.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'location',
  	attributes: {
  		lat: {
  			type:'string'
  		},
  		lng: {
  			type: 'string'
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

