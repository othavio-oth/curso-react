'use strict';

/**
 * ingredient-recipe service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ingredient-recipe.ingredient-recipe');
