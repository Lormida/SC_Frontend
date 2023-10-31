<script setup lang="ts">
const router = useRouter()

function backNavigate() {
  router.go(-1)
}
</script>

<template>
  <button
    :class="{ 'back-button--disabled': router.currentRoute.value.name === 'Main' }"
    class="back-button cybr-btn py-4 px-20 text-xl"
    @click="backNavigate"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.back-button {
  @apply fixed left-.5% top-2% z-3;

  &--disabled {
    @apply opacity-50 pointer-events-none scale-95;
  }
}
</style>
