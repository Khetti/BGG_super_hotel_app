<template lang="html">
  <form class="" v-on:submit="addGuest" method="post">
    <label for="name">Name: </label>
    <input type="text" id="name" v-model="name" required />

    <label for="email">Email: </label>
    <input type="text" id="email" v-model="email" required />

    <input type="submit" value="Save" id="save" />
  </form>
</template>

<script>
import { eventBus } from '@/main.js';
import GuestsService from '@/services/GuestsService.js';

export default {
  name: 'guest-form',
  data(){
    return {
      name: '',
      email: '',
      checked_in: false
    }
  },

  methods: {
    addGuest(e){
      e.preventDefault()
      const guest = {
        name: this.name,
        email: this.email,
        checked_in: this.checked_in
      }
      GuestsService.postGuest(guest)
      .then(res => eventBus.$emit('guest-added', res))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
