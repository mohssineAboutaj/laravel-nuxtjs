import { description, keywords } from './config'
import { getBaseUrlByEnv } from './utils'

// global mixins
export const globalMixins = {
  computed: {
    globalStyles() {
      return {
        inputs: {
          outlined: true,
          'validate-on-blur': true,
        },
        readonly: {
          outlined: true,
          readonly: true,
          filled: true,
        },
        dataTable: {
          'disable-sort': true,
          class: ['elevation-10', 'my-6'],
          loading: false,
        },
        fab: {
          fab: true,
          class: ['ma-1'],
          'x-small': true,
        },
        responsiveBotton: {
          class: ['mx-2', 'my-1', 'elevation-2'],
          ...(this.$vuetify.breakpoint.smAndDown
            ? { 'x-small': true, fab: true }
            : { small: true, rounded: true }),
        },
        cards: {
          class: ['elevation-10', 'my-6', 'mx-auto'],
        },
      }
    },
  },
  methods: {
    setMediaUrl(path) {
      return getBaseUrlByEnv() + path
    },
    timestanpToLocaleString(timestamp) {
      return new Date(timestamp).toLocaleString()
    },
  },
}

// pages mixin
export const pageSharedMixin = {
  // hooks
  created() {
    this.$root.$emit(
      'updateAppbarTitle',
      typeof this.title === 'number' ? this.title : this.$t(this.title)
    )
  },
  // meta head
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: 'description',
          content: this.description || description,
        },
        {
          name: 'keywords',
          content: this.keywords || keywords.join(', '),
        },
      ],
    }
  },
}
