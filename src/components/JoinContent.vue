<template>
    <section class="flex flex-col items-center text-center py-12">
      <!-- Title -->
      <h2 class="text-4xl font-bold tracking-tight leading-tight text-gray-800 max-w-xl">
        Join our team to be a part of our story
      </h2>
  
      <!-- Subtitle -->
      <p class="mt-4 text-base leading-7 text-zinc-500 max-w-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
  
      <!-- Join Button -->
      <button 
        class="mt-8 px-8 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        @click="handleJoinClick"
      >
        Join Now
      </button>
    </section>
  </template>
  
  <script>
  export default {
    name: 'JoinTeam',
    methods: {
      handleJoinClick() {
        // Handle join button click action
        alert('Join button clicked');
      }
    }
  }
  </script>
  
  <style scoped>
  section {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>
  