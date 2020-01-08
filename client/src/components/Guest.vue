<template lang="html">
  <div class="guest">
    <h2>Name: {{guest.name}}</h2>
    <p>email: {{guest.email}}</p>
    <p>Checked in: {{guest.checked_in}}</p>
    <button type="button" @click="deleteGuest">Delete guest</button>
  </div>
</template>

<script>
import {eventBus} from '@main.js'
import GuestsService from '@/services/GuestsService.js'

export default {
  name: 'guest',
  props: ['guest'],
  methods: {
    deleteGuest(){
      GuestsService.deleteGuest(this.guest._id)
      .then(() => eventBus.$emit('game-deleted', this.game_id))
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
