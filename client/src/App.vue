<template>
  <div id="app">
    <guest-form />
    <guest-list :guests="guests"/>
    <guest v-for="(guest, index) in guests" :key="index" :game="guest" />
  </div>
</template>

<script>
import GuestForm from '@/components/GuestForm';
import GuestList from '@/components/GuestList';
import Guest from '@/components/Guest'
import GuestsService from '@/services/GuestsService';
import { eventBus } from './main';

export default {
  name: 'app',
  data () {
    return {
      guests: []
    }
  },

  mounted(){
    this.fetchData();

    eventBus.$on('guest-added', (guest) => {
      this.guests.push(guest)
    })

    eventBus.$on('guest-deleted', (id) => {
      let index = this.guests.findIndex(guest => guest._id === id)
      this.guest.splice(index, 1)
    })
  },

  components: {
    'guest-form': GuestForm,
    'guest-list': GuestList,
    'guest': Guest
  },

  methods: {
    fetchData(){
      GuestsService.getGuests()
      .then(guests => this.guests = guests);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
