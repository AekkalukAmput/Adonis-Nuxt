
'use strict'

const { resolve } = require('path')

module.exports = {

    css: [],

    head: {
        title: 'Adonuxt',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1'
            },
            {
                'http-equiv': 'x-ua-compatible',
                content: 'ie=edge,chrome=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Adonuxt project'
            }
        ],
        link: [
            {
                rel: 'shortcut icon',
                type: 'image/x-icon',
                href: 'favicon.png'
            }
        ],
        noscript: [{
            innerHtml: `
      <h1>Javascript Disabled</h1>
      <p>It appears that you do not have Javascript enabled. This application relies on Javascript for most of our features.<p>
      <p>Please enable Javascript and <a href=".">reload</a> in order to use this site.</p>
    `}]
    },

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify'
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/proxy'
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        proxy: true,
    },

    proxy: {
        '/api/': { target: 'http://127.0.0.1:3333/api', pathRewrite: { '^/api/': '' }, changeOrigin: true }
    },

    /*
    ** importing a custom loader. this will overwrite the default loader
    */
    loading: '~/components/Loading/LoadingCircle',

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: '#1976d2',
                    accent: '#424242',
                    secondary: '#ff8f00',
                    info: '#26a69a',
                    warning: '#ffc107',
                    error: '#dd2c00',
                    success: '#00e676'
                }
            }
        }
    },

    ssr: false, // Disable Server Side rendering

    router: {
        base: '/',
        scrollBehaviour: () => ({
            x: 0,
            y: 0
        })
    },

    srcDir: resolve(__dirname, '..', 'resources')

}