<template>
  <div>
    <v-parallax src="http://placeimg.com/640/480/people">
      <v-overlay absolute>
        <v-container>
          <v-row class="align-center fill-height">
            <v-col class="text-center text-capitalize" cols="12">
              <h1 class="display-4 mb-5">{{ title }}</h1>
              <h4 class="display-2">{{ subtitle }}</h4>
            </v-col>
          </v-row>
        </v-container>
      </v-overlay>
    </v-parallax>
    <v-container>
      <h2>home</h2>
    </v-container>
  </div>
</template>

<script>
import { title, subtitle } from '@/config'

export default {
  name: 'IndexPage',
  data: () => ({
    title,
    subtitle,
  }),
}
</script>
