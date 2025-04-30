'use strict';

/**
 * courtier service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::courtier.courtier');
