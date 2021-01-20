<template>
  <div id="app">
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import BookingsService from "@/services/BookingsService";
import BookingsGrid from "@/components/BookingsGrid";
import BookingCard from "@/components/BookingCard";

export default {
  name: "app",
  components: {
    "bookings-grid": BookingsGrid,
    "booking-card": BookingCard,
  },
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