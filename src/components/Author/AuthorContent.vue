<template>
    <!-- Header Section with Author Info -->
    <header class="flex flex-col">
        <div class="flex flex-col items-center px-20 pt-32 w-full bg-gray-100 max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div class="flex flex-col w-full max-w-screen-lg">
            <div class="w-[952px] max-w-full">
            <div class="flex gap-5 max-md:flex-col">
                <div class="flex flex-col w-[27%] max-md:w-full">
                <img 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a32d462cceceb3224a96c6cb69a80c1af309687f394da6691c37dc18dac01173?placeholderIfAbsent=true&apiKey=6d02ae9f5b77441d9d707df8d2934530"
                    alt="Author's portrait"
                    class="object-contain w-full aspect-[0.85] max-md:mt-8"
                />
                </div>
                <div class="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                <h1 class="text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] max-md:text-4xl max-md:leading-[60px]">
                    Hey there, I'm Andrew Jonhson and welcome to my Blog
                </h1>
                <p class="mt-6 mr-5 text-base leading-7 text-zinc-500 max-md:mr-2.5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.
                </p>
                </div>
            </div>
            </div>
            <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c6adf65d2b2182cdb25b4a072861eb1ed209bb0f828b6136c6697d20e482490?placeholderIfAbsent=true&apiKey=6d02ae9f5b77441d9d707df8d2934530"
            alt=""
            class="object-contain mt-28 w-full aspect-[43.48] max-md:mt-10"
            />
        </div>
        </div>
    </header>
  
    <!-- Main Content with My Posts Section -->
    <main class="container mx-auto px-5 py-20 max-w-screen-lg">
      <h2 class="text-4xl font-bold text-gray-800 mb-10">My Posts</h2>
      
      <div class="space-y-10">
        <!-- Post 1 -->
        <div class="flex flex-col md:flex-row md:items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/063e683dcfd2627e2e12e5b8e8f2938873e1fb36c6628e6b054c6bf1d7c4465c?placeholderIfAbsent=true&apiKey=6d02ae9f5b77441d9d707df8d2934530"
            alt="Post image"
            class="w-full h-64 object-cover rounded-lg mb-5 md:mb-0 md:mr-8 md:w-1/3"
          />
          <div class="flex flex-col justify-center w-full md:w-2/3">
            <span class="text-yellow-500 text-sm font-semibold uppercase">Business</span>
            <h3 class="text-2xl font-bold text-gray-800 mt-2">
              Font sizes in UI design: The complete guide to follow
            </h3>
            <p class="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        
        <!-- Post 2 -->
        <div class="flex flex-col md:flex-row md:items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b86110c782542f99d213ae484a5155d5c646079dc9465d48342d41a1f2b7b1ba?placeholderIfAbsent=true&apiKey=6d02ae9f5b77441d9d707df8d2934530"
            alt="Post image"
            class="w-full h-64 object-cover rounded-lg mb-5 md:mb-0 md:mr-8 md:w-1/3"
          />
          <div class="flex flex-col justify-center w-full md:w-2/3">
            <span class="text-yellow-500 text-sm font-semibold uppercase">Economy</span>
            <h3 class="text-2xl font-bold text-gray-800 mt-2">
              How to build rapport with your web design clients
            </h3>
            <p class="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  export default {
    name: 'AuthorHeader',
  };
  </script>
  
  <style scoped>
  /* Optional additional styling */
  </style>
  