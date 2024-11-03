<template>
    <!-- Blog Category Header Section -->
    <header class="flex flex-col text-base text-center text-gray-800">
      <section class="flex flex-col justify-center items-center p-20 w-full bg-gray-100 max-md:px-5">
        <div class="flex flex-col items-center max-w-full w-[472px]">
          <h1 class="text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">Business</h1>
          <p class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
          <nav class="mt-8 font-medium leading-none uppercase tracking-[3px]">
            <a href="#" class="focus:outline-none focus:ring-2 focus:ring-blue-500">Blog</a> &gt; 
            <a href="#" class="focus:outline-none focus:ring-2 focus:ring-blue-500">Business</a>
          </nav>
        </div>
      </section>
    </header>
  
    <!-- Category Section -->
    <section class="flex flex-col rounded-none">
      <div class="flex gap-5 max-md:flex-col">
        <!-- Main Content Area (Articles) on the left -->
        <main class="flex flex-col gap-6 w-[76%] max-md:w-full">
          <!-- Article with Image and Text Side by Side -->
          <article class="flex flex-col md:flex-row items-start p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <img 
              src="@/assets/images/misc/blog1.png" 
              alt="Article Image" 
              class="w-full md:w-1/3 h-auto rounded-lg object-cover mb-4 md:mb-0 md:mr-6" />
            <div class="flex flex-col w-full md:w-2/3">
              <h2 class="text-sm font-semibold text-amber-300 uppercase tracking-wide">Business</h2>
              <h3 class="mt-2 text-2xl font-bold text-gray-800 leading-snug">Top 6 free website mockup tools 2022</h3>
              <p class="mt-2 text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
              </p>
            </div>
          </article>

          <!-- Article with Image and Text Side by Side -->
          <article class="flex flex-col md:flex-row items-start p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <img 
              src="@/assets/images/misc/blog1.png" 
              alt="Article Image" 
              class="w-full md:w-1/3 h-auto rounded-lg object-cover mb-4 md:mb-0 md:mr-6" />
            <div class="flex flex-col w-full md:w-2/3">
              <h2 class="text-sm font-semibold text-amber-300 uppercase tracking-wide">Business</h2>
              <h3 class="mt-2 text-2xl font-bold text-gray-800 leading-snug">Top 6 free website mockup tools 2022</h3>
              <p class="mt-2 text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
              </p>
            </div>
          </article>
          
          <!-- Article with Image and Text Side by Side -->
          <article class="flex flex-col md:flex-row items-start p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <img 
              src="@/assets/images/misc/blog1.png" 
              alt="Article Image" 
              class="w-full md:w-1/3 h-auto rounded-lg object-cover mb-4 md:mb-0 md:mr-6" />
            <div class="flex flex-col w-full md:w-2/3">
              <h2 class="text-sm font-semibold text-amber-300 uppercase tracking-wide">Business</h2>
              <h3 class="mt-2 text-2xl font-bold text-gray-800 leading-snug">Top 6 free website mockup tools 2022</h3>
              <p class="mt-2 text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
              </p>
            </div>
          </article>
  
          <!-- Duplicate as needed for additional articles -->
        </main>
  
        <!-- Sidebar with Categories and All Tags on the right -->
        <aside class="flex flex-col w-[24%] max-md:w-full">
          <div class="flex flex-col gap-4 mt-8">
            <!-- Category Cards -->
            <router-link to="/startup" class="category-card flex items-center gap-4 p-4 rounded-lg transition-colors duration-300" active-class="bg-blue-600 text-white">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d62b680e110f63bbd900b5cca6ea729feccf24c270e46e3c7aef80075df3f516?placeholderIfAbsent=true&apiKey=6d02ae9f5b77441d9d707df8d2934530" alt="Startup" class="w-8 h-8" />
              <span class="text-lg font-medium">Startup</span>
            </router-link>
  
            <router-link to="/business" class="category-card flex items-center gap-4 p-4 rounded-lg transition-colors duration-300" active-class="bg-blue-600 text-white">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/570f6f7fb29b16dad0b99bac0f90f69429a6ee77abf4cd131b68f2a9b67ee6d5?placeholderIfAbsent=true&apiKey=6d02ae9f5b77441d9d707df8d2934530" alt="Business" class="w-8 h-8" />
              <span class="text-lg font-medium">Business</span>
            </router-link>
  
            <router-link to="/economy" class="category-card flex items-center gap-4 p-4 rounded-lg transition-colors duration-300" active-class="bg-blue-600 text-white">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f05613e2708b885a418bd98f9150fd22068695461bf1c73971b7128387c10600?placeholderIfAbsent=true&apiKey=6d02ae9f5b77441d9d707df8d2934530" alt="Economy" class="w-8 h-8" />
              <span class="text-lg font-medium">Economy</span>
            </router-link>
  
            <router-link to="/technology" class="category-card flex items-center gap-4 p-4 rounded-lg transition-colors duration-300" active-class="bg-blue-600 text-white">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7c6f05daa2ccd5ebf5c0c73e4b0cac9d77639b14b074ee44d01b044cc637a51?placeholderIfAbsent=true&apiKey=6d02ae9f5b77441d9d707df8d2934530" alt="Technology" class="w-8 h-8" />
              <span class="text-lg font-medium">Technology</span>
            </router-link>
          </div>
  
          <!-- All Tags Section -->
          <section class="flex flex-col text-sm font-bold leading-8 text-gray-800 rounded-3xl mt-8">
            <h2 class="self-start text-4xl tracking-tighter leading-none">All Tags</h2>
            <div class="flex flex-wrap gap-4 mt-6">
              <button class="px-6 py-2 rounded-3xl border-2 border-solid border-zinc-500">Business</button>
              <button class="px-6 py-2 rounded-3xl border-2 border-solid border-zinc-500">Experience</button>
              <button class="px-6 py-2 rounded-3xl border-2 border-solid border-zinc-500">Screen</button>
              <button class="px-6 py-2 rounded-3xl border-2 border-solid border-zinc-500">Technology</button>
              <button class="px-6 py-2 rounded-3xl border-2 border-solid border-zinc-500">Marketing</button>
              <button class="px-6 py-2 rounded-3xl border-2 border-solid border-zinc-500">Life</button>
            </div>
          </section>
        </aside>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'BlogCategoryPage'
  };
  </script>
  
  <style scoped>
  .category-card {
    @apply bg-white border-2 border-transparent rounded-lg cursor-pointer transition-colors duration-300;
  }
  
  .category-card:hover {
    @apply border-blue-600;
  }
  </style>
  