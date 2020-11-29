'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Dessert', (faker) => {
    return {
        des_name: faker.name(),
        des_store: faker.company(),
        des_price: Math.random() * (200 - 50) + 50,
    }
})
