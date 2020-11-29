'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DessertsSchema extends Schema {
  up() {
    this.create('desserts', (table) => {
      table.increments()
      table.string('des_name', 100).notNullable().unique()
      table.string('des_store', 100).notNullable().unique()
      table.integer('des_price').notNullable().unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('desserts')
  }
}

module.exports = DessertsSchema
