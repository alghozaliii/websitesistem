<script setup>

</script>

<template>
  <footer class="flex overflow-hidden flex-col justify-center px-20 py-14 bg-gray-800 max-md:px-5">
    <div class="flex flex-wrap gap-5 justify-between items-start w-full text-base leading-7 text-white max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9221071d87fa6d8a14e4101d1b3e8c7126e03bedc0c590076cecdb2f1c6a3b2b?placeholderIfAbsent=true&apiKey=c8698c43222e44c9baf2ff8bdf6a77c2" alt="Company Logo" class="object-contain shrink-0 max-w-full aspect-[5] w-[140px]" />
      <nav class="flex gap-6">
        <a href="/" class="grow hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Home</a>
        <a href="/blog" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Blog</a>
        <a href="/about" class="my-auto leading-loose hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">About us</a>
        <a href="/contact" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Contact us</a>
        <a href="/policy" class="basis-auto hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Privacy Policy</a>
      </nav>
    </div>
    <section class="px-16 py-20 mt-14 w-full bg-white bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <h2 class="text-4xl font-bold tracking-tighter leading-10 text-white max-md:mt-10 max-md:max-w-full">
            Subscribe to our news letter to get latest updates and news
          </h2>
        </div>
        <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <form @submit.prevent="handleSubmit" class="flex flex-wrap gap-6 mt-1 w-full max-md:mt-10 max-md:max-w-full">
            <label for="email" class="sr-only">Enter Your Email</label>
            <input 
              type="email" 
              id="email" 
              required
              placeholder="Enter Your Email"
              class="grow px-6 py-6 text-base leading-loose border border-solid border-neutral-600 text-zinc-500 w-fit max-md:px-5 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-gray-800"
            />
            <button 
              type="submit"
              class="gap-3 px-12 py-4 text-lg font-bold leading-none text-white whitespace-nowrap bg-blue-600 max-md:px-5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
    <address class="flex flex-wrap gap-5 justify-between mt-12 text-base leading-7 text-white max-md:mt-10 max-md:max-w-full not-italic">
      <p class="opacity-70">Finstreet 118 2561 Fintown</p>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b7c5ed64c8bdc63c7c3df9bd84313feb1f7a13c60a411c7d4c930c1914b7fcb?placeholderIfAbsent=true&apiKey=c8698c43222e44c9baf2ff8bdf6a77c2" alt="Social Media Icons" class="object-contain shrink-0 self-start mt-3 w-36 max-w-full aspect-[9.01]" />
    </address>
    <address class="self-start text-base leading-7 text-white opacity-70 not-italic">
      <a href="mailto:Hello@finsweet.com" class="hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">Hello@finsweet.com</a>
      <a href="tel:02079932905" class="ml-2 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300">020 7993 2905</a>
    </address>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    handleSubmit() {
      // Handle form submission
    }
  }
}
</script>
