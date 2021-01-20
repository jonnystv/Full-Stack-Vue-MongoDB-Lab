<template lang="html">
  <div class="bookingCard">
      <h2>{{ booking.name }}</h2>
      <h4>{{ booking.email }}</h4>
      <h4>{{ booking.checkedIn }}</h4>
  </div>
  
</template>

<script>
export default {
  name: "booking-card",
  props: ["booking"],
};
</script>

<style>
</style>