<template>
  <div id="app">
    <bookings-form />
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import { eventBus } from "@/main.js";
import BookingsService from "@/services/BookingsService";
import BookingsGrid from "@/components/BookingsGrid";
import BookingCard from "@/components/BookingCard";
import BookingsForm from "@/components/BookingsForm";

export default {
  name: "app",
  components: {
    "bookings-grid": BookingsGrid,
    "booking-card": BookingCard,
    "bookings-form": BookingsForm,
  },
  data() {
    return {
      bookings: [],
    };
  },
  mounted() {
    this.fetchBookings();

    eventBus.$on("booking-added", (booking) => {
      this.bookings.push(booking);
    });

    eventBus.$on("delete-booking", (id) => {
      this.bookings = this.bookings.filter((booking) => {
        return booking._id != id
      })
    })
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