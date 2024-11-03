<template>
  <section class="flex flex-col items-center py-16">
    <h2 class="text-4xl font-bold tracking-tighter leading-none text-gray-800 mb-10">
      Choose A Category
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Business Category -->
      <router-link to="/business" class="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:border-blue-500 transition">
        <div class="p-3 bg-blue-50 rounded-full mb-4">
          <img
            loading="lazy"
            src="@/assets/images/logo/busines.png"
            alt="Business Icon"
            class="w-8 h-8"
          />
        </div>
        <h3 class="text-xl font-semibold text-gray-800">Business</h3>
        <p class="mt-2 text-sm text-gray-600 text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
      </router-link>

      <!-- Startup Category -->
      <router-link to="/startup" class="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:border-blue-500 transition">
        <div class="p-3 bg-blue-50 rounded-full mb-4">
          <img
            loading="lazy"
            src="@/assets/images/logo/startup.png"
            alt="Startup Icon"
            class="w-8 h-8"
          />
        </div>
        <h3 class="text-xl font-semibold text-gray-800">Startup</h3>
        <p class="mt-2 text-sm text-gray-600 text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
      </router-link>

      <!-- Economy Category -->
      <router-link to="/economy" class="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:border-blue-500 transition">
        <div class="p-3 bg-blue-50 rounded-full mb-4">
          <img
            loading="lazy"
            src="@/assets/images/logo/eco.png"            
            alt="Economy Icon"
            class="w-8 h-8"
          />
        </div>
        <h3 class="text-xl font-semibold text-gray-800">Economy</h3>
        <p class="mt-2 text-sm text-gray-600 text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
      </router-link>

      <!-- Technology Category -->
      <router-link to="/technology" class="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:border-blue-500 transition">
        <div class="p-3 bg-blue-50 rounded-full mb-4">
          <img
            loading="lazy"
            src="@/assets/images/logo/tech.png"            
            alt="Technology Icon"
            class="w-8 h-8"
          />
        </div>
        <h3 class="text-xl font-semibold text-gray-800">Technology</h3>
        <p class="mt-2 text-sm text-gray-600 text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
/* Optional: Custom styling if needed */
</style>
