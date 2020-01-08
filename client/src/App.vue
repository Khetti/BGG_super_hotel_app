<template>
  <div id="app">
    <guest-form />
    <guest-list />
  </div>
</template>

<script>
import GuestForm from '@/components/GuestForm';
import GuestList from '@/components/GuestList';
import GuestsService from '@/services/GuestsService'l;
import { eventBus } from './main';

export default {
  name: 'app',
  data () {
    return {
      guests: []
    }
  },
  components: {
    'guest-form': GuestForm,
    'guest-list': GuestList
  },
  mounted(){
    this.fetchData();
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
