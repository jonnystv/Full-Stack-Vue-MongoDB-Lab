<template lang="html">
  <div class="bookingCard">
      <h2>{{ booking.name }}</h2>
      <h4>{{ booking.email }}</h4>
      <h5 v-if="booking.checkedIn">checked In</h5>
        <h5 v-else>Not checked in</h5>
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

.bookingCard {
  border: solid 1px black;
  margin: 3px;
  padding: 2px;
}
</style>