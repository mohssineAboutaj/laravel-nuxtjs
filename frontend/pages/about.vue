<template>
  <v-container>
    <v-card v-bind="globalStyles.cards" max-width="300">
      <v-card-title class="justify-center display-2">
        {{ title }}
      </v-card-title>

      <v-card-text class="text-center caption my-5">
        {{ description }}
      </v-card-text>

      <v-card-actions class="justify-center">
        <span>author</span><b class="mx-1">{{ author }}</b>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { pageSharedMixin } from '@/mixins'
import { description, author } from '@/config'

export default {
  name: 'AboutPage',
  mixins: [pageSharedMixin],
  data: () => ({
    title: 'About',
    description,
    author,
  }),
}
</script>
