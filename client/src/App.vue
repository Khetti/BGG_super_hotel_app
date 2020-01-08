<template>
  <div id="app">
    <guest-form />
    <guest-list :guests="guests"/>
  </div>
</template>

<script>
import GuestForm from '@/components/GuestForm';
import GuestList from '@/components/GuestList';
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
  },

  components: {
    'guest-form': GuestForm,
    'guest-list': GuestList
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
