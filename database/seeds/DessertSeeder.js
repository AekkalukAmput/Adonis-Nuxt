'use strict'

/*
|--------------------------------------------------------------------------
| DessertSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DessertSeeder {
  async run() {
    await Factory
      .model('App/Models/Dessert')
      .createMany(3)
  }
}

module.exports = DessertSeeder
