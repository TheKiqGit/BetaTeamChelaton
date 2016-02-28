/**
 * Notification.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	tableName: 'Notification_type',
	autoCreatedAt: false,
    autoUpdatedAt: false,
 	attributes: {
 		tiempo: {
 			type: 'integer',
 			required: true
 		},
 		description: {
 			type: 'string',
 			required: true
 		}
 	}
};

