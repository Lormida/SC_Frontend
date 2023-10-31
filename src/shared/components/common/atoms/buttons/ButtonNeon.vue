<script setup lang="ts">
interface IPropsButton {
  isDisabled?: boolean
  opacity?: number
  size: 'small' | 'medium' | 'large'
}

const { isDisabled = false, opacity = 100 } = defineProps<IPropsButton>()
</script>

<template>
  <button :style="{ opacity }" :disabled="isDisabled" class="button lens-effect">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button {
  // border: 2px solid rgba(var(--pink-500));
  @apply flex items-center justify-center gap-x-3 px-10 py-3 rounded-3xl transition-300;
  @apply text-white;
  @apply hover:(opacity-100);
  @apply sm:(w-fit);
}

.button[disabled] {
  @apply opacity-50 pointer-events-none;
}
</style>
