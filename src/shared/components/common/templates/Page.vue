<script setup lang="ts">
import { VAtomSpinnerLoader } from '../atoms/loader'
import { VAtomToggleDarkMode } from '../atoms/switches'
import { VAtomText } from '../atoms/texts'
import { VMoleculeLanguageLink } from '../molecules'

const props = defineProps<{ isRender: boolean }>()
</script>

<template>
  <div class="container-page">
    <template v-if="props.isRender">
      <v-atom-text>Header</v-atom-text>

      <nav class="link-container">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/intersection-api/reactive-aside-content">Reactive aside content</router-link>
        <router-link class="link" to="/intersection-api/infinity-scroll">Infinity Scroll</router-link>
        <v-atom-toggle-dark-mode class="header__theme-toggler" />
      </nav>

      <v-molecule-language-link class="w-1/2 mx-a my-5" />

      <v-atom-spinner-loader size="middle" color="rgba(var(--teal-700))" speed="normal" class="my-10" />
    </template>

    <slot />
    <v-atom-text v-if="props.isRender">Footer</v-atom-text>
  </div>
</template>

<style lang="scss" scoped>
.container-page {
  @apply flex flex-col w-full min-h-screen h-1px mx-a;
}

.link-container {
  @apply flex flex-wrap justify-center gap-6;
  // @apply flex w-1/2 mx-a justify-evenly py-5 px-3 bg-gray-200;
}
.header__theme-toggler {
  @apply max-w-1/3;
}
</style>
