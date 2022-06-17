/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const { onUpdateTrigger } = require('../../../knexfile')

exports.up = async knex => knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.text('username').unique().notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  }).then(() => knex.raw(onUpdateTrigger('users')))

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async knex => knex.schema.dropTable('users')
