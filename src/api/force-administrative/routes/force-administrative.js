'use strict';

/**
 * force-administrative router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::force-administrative.force-administrative');
