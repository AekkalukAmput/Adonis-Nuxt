'use strict'

const NuxtService = use('App/Services/Nuxt')

class NuxtController {

    async render({ request, response, session }) {
        response.implicitEnd = false
        await session.commit()
        await NuxtService.nuxt.render(request.request, response.response)
    }
}

module.exports = NuxtController
