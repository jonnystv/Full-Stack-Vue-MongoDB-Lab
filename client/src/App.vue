<template>
  <h1>Hotel bookings</h1>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      bookings: [],
    };
  },
  mounted() {
    this.fetchBookings();
  },
  methods: {
    fetchBookings() {
      BookingsService.getBookings().then(
        (bookings) => (this.bookings = bookings)
      );
    },
  },
};
</script>

<style>
</style>