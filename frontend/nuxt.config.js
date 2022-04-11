import { join } from 'path'
import { copySync, removeSync } from 'fs-extra'
import colors from 'vuetify/es5/util/colors'

import { title, port, description, keywords, author } from './config'
import { getBaseUrlByEnv } from './utils'

const globalColorPallette = {
  primary: colors.deepOrange.base,
}

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // set src directory
  srcDir: __dirname,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | ' + title,
    title,
    htmlAttrs: {},
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: keywords.join(', '),
      },
      {
        hid: 'author',
        name: 'author',
        content: author,
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['./plugins/globalMixins'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    [
      '@nuxtjs/vuetify',
      {
        customVariables: ['~/assets/variables.scss'],
        theme: {
          dark: true,
          themes: {
            dark: { ...globalColorPallette, bg: colors.grey.darken4 },
            light: { ...globalColorPallette, bg: colors.grey.lighten3 },
          },
        },
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    [
      '@nuxtjs/axios',
      {
        baseURL: getBaseUrlByEnv() + 'api',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    ],
    // https://www.npmjs.com/package/nuxt-i18n
    [
      'nuxt-i18n',
      {
        locales: ['en'],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: require('./locales/en.json'),
          },
          silentTranslationWarn: true,
        },
      },
    ],
  ],

  // router
  router: {
    middleware: ['guard'],
    extendRoutes(routes) {
      routes.push(
        { path: '/login', redirect: '/auth/login' },
        { path: '/register', redirect: '/auth/register' }
      )
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  hooks: {
    generate: {
      done(generator) {
        // Copy dist files to public/_nuxt
        if (
          generator.nuxt.options.dev === false &&
          generator.nuxt.options.mode === 'spa'
        ) {
          // get public path for dist files
          const publicDir = join(
            generator.nuxt.options.rootDir,
            'public',
            '_nuxt'
          )
          /// remove old
          removeSync(publicDir)
          /// copy new dist folder
          copySync(
            join(generator.nuxt.options.generate.dir, '_nuxt'),
            publicDir
          )
          /// copy index/200 page to resources
          copySync(
            join(generator.nuxt.options.generate.dir, '200.html'),
            join(publicDir, '../../resources/views/nuxt.blade.php')
          )
          /// remove generated direcotory
          removeSync(generator.nuxt.options.generate.dir)
        }
      },
    },
  },

  server: { port },
}
