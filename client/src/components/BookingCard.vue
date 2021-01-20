<template lang="html">
  <div class="bookingCard">
      <h2>{{ booking.name }}</h2>
      <h4>{{ booking.email }}</h4>
      <h4>{{ booking.checkedIn }}</h4>
      <button v-on:click="handleDelete(booking._id)">Delete</button>
  </div>

</template>

<script>
import {eventBus} from '@/main';
import BookingsService from '@/services/BookingsService';

export default {
  name: "booking-card",
  props: ["booking"],
  methods: {

      handleDelete(id) {
          BookingsService.deleteBooking(this.booking._id).then(() =>
          eventBus.$emit('delete-booking', this.booking._id));
      }
  }
};
</script>

<style>
</style>