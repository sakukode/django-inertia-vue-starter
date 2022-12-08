import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'

const pages = import.meta.glob('./pages/**/*.vue')

document.addEventListener('DOMContentLoaded', () => {
    InertiaProgress.init({ showSpinner: true })

    createInertiaApp({
        resolve: async name => {
            const page = (await pages[`./pages/${name}.vue`]()).default
            return page
        },
        setup({ el, App, props, plugin }) {
            createApp({render: () => h(App, props)})
                .use(plugin)
                .mount(el)
        }
    })
})
