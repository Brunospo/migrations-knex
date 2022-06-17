/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 const { onUpdateTrigger } = require('../../../knexfile')

 exports.up = async knex => knex.schema.createTable('projects', table => {
  table.increments('id').primary()
  table.text('title')

  table.integer('user_id').references('users.id').notNullable().onDelete('CASCADE')

  table.timestamps(true, true)
}).then(() => knex.raw(onUpdateTrigger('projects')))

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = async knex => knex.schema.dropTable('projects')
