<template lang="html">
  <div id="bookingsGrid">
        <booking-card v-for="(booking,index) in bookings" :key="index" :booking="booking" />
  </div>
</template>

<script>
import BookingCard from "@/BookingCard.js";
export default {
  name: "bookings-grid",
  components: {
    "booking-card": BookingCard,
  },
  props: ["bookings"],
};
</script>

<style>
</style>