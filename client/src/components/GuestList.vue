<template lang="html">
  <div id="guest-list">
    <ul>
      <guest v-for="(guest, index) in guests" :key="index" :guest="guest" />
    </ul>
  </div>
</template>

<script>
import Guest from './Guest.vue'

export default {
  name: 'guest-list',
  props: ['guests'],
  components: {
    'guest': Guest
  }
}
</script>

<style lang="css" scoped>
</style>
