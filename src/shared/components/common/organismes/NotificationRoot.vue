<script setup lang="ts">
import { useNotificationStore } from '@shared/store/notifications'
import { VMoleculeNotification } from '../molecules'

const notificationStore = useNotificationStore()

const notifications = notificationStore.getAllNotifications
</script>

<template>
  <transition-group name="list-animation" tag="div" mode="out-in" class="notification-container" appear>
    <v-molecule-notification
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </transition-group>
</template>

<style lang="scss" scoped>
.notification-container {
  @apply max-w-[800px];
  @apply xsm:(w-full px-[2%] flex items-center justify-start flex-col gap-y-4 fixed top-2 left-1/2 translate-x-[-50%] z-9999);
  @apply md:(w-1/2);
}
</style>
