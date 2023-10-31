<script setup lang="ts">
const { offsetXLeft, offsetXRight, width, height, verticalAnimation } = defineProps<{
  offsetXLeft?: string
  offsetXRight?: string
  width: string
  height: string
  verticalAnimation?: boolean
  horizontalAnimation?: boolean
}>()

const feTurbulence = ref<SVGFETurbulenceElement>()
const feDisplacementMap = ref<SVGFEDisplacementMapElement>()
const heightScreen = `${document.documentElement.clientHeight}px`
const widthScreen = `${document.documentElement.clientWidth}px`

onMounted(() => {
  let baseFrequency = 0.01
  const limit = baseFrequency
  let hight = true

  const animateDistortion = () => {
    console.log('aa')

    if (baseFrequency >= limit * 2) {
      hight = false
    }

    if (baseFrequency <= limit / 2) {
      hight = true
    }

    if (hight) {
      baseFrequency += limit / 500
    } else {
      baseFrequency -= limit / 500
    }

    if (!feTurbulence.value || !feDisplacementMap.value) return
    ;(feTurbulence.value as SVGFETurbulenceElement).setAttribute('baseFrequency', `${baseFrequency}`)
    ;(feDisplacementMap.value as SVGFEDisplacementMapElement).setAttribute('scale', `${baseFrequency * 2000}`)

    requestAnimationFrame(animateDistortion)
  }

  // Initial actiavation
  if (feTurbulence.value && feDisplacementMap.value) {
    animateDistortion()
  }
})

onUnmounted(() => {
  feTurbulence.value = undefined
  feDisplacementMap.value = undefined
})
</script>

<template>
  <svg style="visibility: hidden; position: absolute">
    <filter id="warp">
      <feTurbulence
        ref="feTurbulence"
        type="fractalNoise"
        baseFrequency="0.05"
        numOctaves="2"
        result="warp"
      ></feTurbulence>
      <feDisplacementMap
        ref="feDisplacementMap"
        xChannelSelector="R"
        yChannelSelector="G"
        scale="2"
        in="SourceGraphic"
        in2="warp"
      ></feDisplacementMap>
    </filter>
  </svg>

  <div
    :class="{ 'move-vertical-box': verticalAnimation, 'move-horizontal-box': horizontalAnimation }"
    :style="{ width, height, left: offsetXLeft, right: offsetXRight }"
    class="lens-effect"
  ></div>
</template>

<style lang="scss" scoped>
.lens-effect {
  @apply absolute;
  backdrop-filter: saturate(20%);
  filter: url(#warp);
}

.move-vertical-box {
  animation: moveUpDown 3s infinite alternate;
  animation-timing-function: ease-in-out;
}

.move-horizontal-box {
  animation: moveLeftRight 3s infinite alternate;
  animation-timing-function: ease-in-out;
}

@keyframes moveUpDown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(calc(v-bind(heightScreen) - v-bind(height)));
  }
}

@keyframes moveLeftRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(v-bind(widthScreen) - v-bind(width)));
  }
}
</style>
