'use strict';

/**
 * force-administrative service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::force-administrative.force-administrative');
