<script setup lang="ts">
import { VOrganismNotificationRoot } from './shared/components/common/organismes'
import { VTemplatePage } from './shared/components/common/templates'
import { VAtomBackButton } from './shared/components/common/atoms/buttons'

const route = useRoute()
const isShowTemplatePage = computed(() => !!route.meta.isShowTemplatePage)

onMounted(() => {
  const cursor = document.querySelector('.custom-cursor') as Element
  const links = document.querySelectorAll('a')
  let isCursorInited = false

  const initCursor = () => {
    cursor.classList.add('custom-cursor--init')
    isCursorInited = true
  }

  const destroyCursor = () => {
    cursor.classList.remove('custom-cursor--init')
    isCursorInited = false
  }

  links.forEach((link) => {
    link.addEventListener('mouseover', () => {
      cursor.classList.add('custom-cursor--link')
    })

    link.addEventListener('mouseout', () => {
      cursor.classList.remove('custom-cursor--link')
    })
  })

  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    if (!isCursorInited) {
      initCursor()
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(cursor as any).style = `translate: ${mouseX}px ${mouseY}px`
  })

  document.addEventListener('mouseout', destroyCursor)
})
</script>

<template>
  <div class="custom-cursor"></div>
  <v-atom-back-button to="main">Back</v-atom-back-button>
  <v-organism-notification-root />

  <v-template-page :is-render="isShowTemplatePage">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </v-template-page>
</template>

<style lang="scss">
[v-cloak] {
  display: none !important;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.page-enter-active {
  transition: all 0.5s ease;
}

.page-leave-active {
  transition: all 0.25s ease;
}
</style>
