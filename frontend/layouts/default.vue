<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="showDrawer"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          router
          exact
          :active-class="tabActiveClass"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ $t(link.title) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon v-if="showDrawer" @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div v-if="!showDrawer" class="mx-2">
        <v-tabs color="transparent">
          <v-tab
            v-for="(link, i) in links"
            :key="`horizontal-menu-${i}`"
            :to="link.to"
            :active-class="tabActiveClass"
          >
            {{ $t(link.title) }}
          </v-tab>
        </v-tabs>
      </div>
      <v-app-bar-nav-icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-main class="bg">
      <Nuxt />
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { links, title } from '@/config'

export default {
  name: 'DefaultLayout',
  computed: {
    screen() {
      return this.$vuetify.breakpoint.name
    },
    showDrawer() {
      return ['sm'].includes(this.screen)
    },
    links() {
      return links
    },
  },
  data: () => ({
    title,
    clipped: false,
    drawer: false,
    fixed: false,
    miniVariant: false,
    right: true,
    tabActiveClass: 'text--primary',
  }),
}
</script>
