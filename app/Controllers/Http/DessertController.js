'use strict'

const Dessert = use('App/Models/Dessert')

class DessertController {
    async index({ request, response, view }) {
        const desserts = await Dessert.all();

        return response.json(desserts)
    }

    async store({ request, response }) {
        const des_name = request.input('des_name')
        const des_store = request.input('des_store')
        const des_price = request.input('des_price')

        const dessert = new Dessert()
        dessert.des_name = des_name
        dessert.des_store = des_store
        dessert.des_price = Number(des_price)
        await dessert.save()
        return response.json(dessert)
    }

    async update({ params, request, response }) {
        const des_name = request.input('des_name')
        const des_store = request.input('des_store')
        const des_price = request.input('des_price')

        let dessert = await Dessert.find(params.id)
        dessert.des_name = des_name
        dessert.des_store = des_store
        dessert.des_price = des_price

        await dessert.save()
        return response.json(dessert)
    }

    async destroy({ params, request, response }) {
        const dessert = await Dessert.find(params.id)
        await dessert.delete()

        return response.json({ message: "Dessert deleted!" })
    }
}

module.exports = DessertController
