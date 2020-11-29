export { default as Logo } from '../..\\resources\\components\\Logo.vue'
export { default as VuetifyLogo } from '../..\\resources\\components\\VuetifyLogo.vue'
export { default as DessertForm } from '../..\\resources\\components\\forms\\DessertForm.vue'
export { default as LoadingCircle } from '../..\\resources\\components\\Loading\\LoadingCircle.vue'

export const LazyLogo = import('../..\\resources\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../..\\resources\\components\\VuetifyLogo.vue' /* webpackChunkName: "components_VuetifyLogo" */).then(c => c.default || c)
export const LazyDessertForm = import('../..\\resources\\components\\forms\\DessertForm.vue' /* webpackChunkName: "components_forms/DessertForm" */).then(c => c.default || c)
export const LazyLoadingCircle = import('../..\\resources\\components\\Loading\\LoadingCircle.vue' /* webpackChunkName: "components_Loading/LoadingCircle" */).then(c => c.default || c)
