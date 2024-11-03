<template>
    <main class="flex flex-col items-center px-4">
      <!-- Header Section -->
      <section class="flex flex-col items-center text-base text-center text-gray-800 max-w-[749px] mt-8">
        <header>
          <h2 class="font-black leading-none uppercase tracking-[3px]">
            Contact Us
          </h2>
          <h3 class="mt-3 text-5xl font-bold tracking-tighter leading-none max-md:text-4xl">
            Let's Start a Conversation
          </h3>
        </header>
        <p class="mt-6 text-zinc-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
      </section>
  
      <!-- Working Hours and Contact Details Section -->
      <section class="flex flex-col max-w-screen-md w-full bg-amber-300 rounded-lg px-16 py-12 mt-8 max-md:px-5">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-full md:w-1/2">
            <h2 class="text-sm opacity-60">Working hours</h2>
            <hr class="my-4 border-neutral-600 opacity-10" />
            <p class="font-bold">Monday to Friday</p>
            <p class="font-bold">9:00 AM to 8:00 PM</p>
            <p class="text-base opacity-60">Our Support Team is available 24/7</p>
          </article>
          <article class="flex flex-col w-full md:w-1/2">
            <h2 class="text-sm opacity-60">Contact Us</h2>
            <hr class="my-4 border-neutral-600 opacity-10" />
            <a href="tel:02079932905" class="text-xl font-bold leading-relaxed">020 7993 2905</a>
            <a href="mailto:hello@finsweet.com" class="text-base opacity-60">hello@finsweet.com</a>
          </article>
        </div>
      </section>
  
      <!-- Contact Form Section -->
      <form class="flex flex-col max-w-screen-md w-full mt-8" @submit.prevent="handleSubmit">
        <label for="fullName" class="sr-only">Full Name</label>
        <input 
          id="fullName"
          type="text"
          v-model="formData.fullName"
          class="p-6 w-full text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 mt-4"
          placeholder="Full Name"
          required
        />
  
        <label for="email" class="sr-only">Your Email</label>
        <input
          id="email"
          type="email"
          v-model="formData.email"
          class="p-6 w-full text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 mt-4"
          placeholder="Your Email"
          required
        />
  
        <div class="flex flex-wrap gap-4 items-center mt-4 w-full text-base leading-7 text-gray-800">
          <div class="flex flex-1 min-w-[240px]">
            <label for="province" class="sr-only">Province</label>
            <select
              id="province"
              v-model="formData.province"
              class="w-full p-6 border border-solid border-zinc-500 border-opacity-50 rounded-sm"
              required
            >
              <option value="" disabled selected>Province</option>
              <!-- Populate with actual provinces -->
            </select>
          </div>
  
          <div class="flex flex-1 min-w-[240px]">
            <label for="city" class="sr-only">City</label>
            <select
              id="city"
              v-model="formData.city"
              class="w-full p-6 border border-solid border-zinc-500 border-opacity-50 rounded-sm"
              required
            >
              <option value="" disabled selected>City</option>
              <!-- Populate with actual cities -->
            </select>
          </div>
        </div>
  
        <label for="message" class="sr-only">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          class="p-6 mt-4 w-full text-base leading-7 text-gray-800 rounded-sm border border-solid border-zinc-500 border-opacity-50 min-h-[144px]"
          placeholder="Message"
          required
        ></textarea>
  
        <button
          type="submit"
          class="px-16 py-4 mt-6 w-full text-2xl font-bold leading-none text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  </template>
  
  <script>
  export default {
    name: 'ContactUs',
    data() {
      return {
        formData: {
          fullName: '',
          email: '',
          province: '',
          city: '',
          message: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        // Handle form submission logic
        console.log("Form Submitted", this.formData);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Custom styles for additional styling or layout tweaks */
  .builder-component {
    max-width: none !important;
  }
  </style>
  