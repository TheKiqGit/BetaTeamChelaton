/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName:'person',
	autoCreatedAt: false,
    autoUpdatedAt: false,
  	attributes: {
  		//Properties
  		name : {
  			type: 'string',
  			required: true
  		},
  		lastname: {
  			type: 'string',
  			required: true
  		},
  		phone: {
  			type: 'integer',
  			required: true,
  			minLength: 10
  		},
  		middlename: {
  			type: 'string',
  			defaultsTo:''
  		},
  		birthday: {
  			type: 'date',
  			required: true
  		},
  		//Associations
  		user: {
  			model: 'Users'
  		},
  		//Class methods
    	getFullName: function (){
      		return this.name + ' ' + this.lastName;
    	}
  	}
};

