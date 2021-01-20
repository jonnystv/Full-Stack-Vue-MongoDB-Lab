<template lang="html">
	<form id="bookings-form" v-on:submit.prevent="handleSubmit" method="post">
		<h2>Add a Booking</h2>
		<div class="formWrap">
			<label for="name">name:</label>
			<input type="text" id="name" v-model="name" required/>
		</div>
		<div class="formWrap">
			<label for="email">email:</label>
			<input type="email" pattern=".+@.+.com" id="email" v-model="email" required/>
		</div>
		<div class="formWrap">
			<label for="checkedIn">Checked in?:</label>
			<input type="checkbox" id="checkBox" v-model="checkedIn" />
		</div>

		<input type="submit" value="Save" id="save"/>
	</form>

</template>

<script>
import BookingsService from "@/services/BookingsService";
import { eventBus } from "@/main.js";
export default {
  name: "bookings-form",
  data() {
    return {
      name: "",
      email: "",
      checkedIn: false,
    };
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      const booking = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn,
      };

      BookingsService.postBooking(booking).then((res) =>
        eventBus.$emit("booking-added", res)
      );
    },
  },
};
</script>

<style>
</style>