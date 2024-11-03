<template>
  <div class="container mx-auto px-4 lg:px-8">
    <!-- Header Section -->
    <header data-layername="blogHeader" class="flex flex-col">
      <div data-layername="background" class="p-20 w-full bg-gray-100 max-md:px-5">
        <div class="flex gap-5 max-md:flex-col">
          <section data-layername="column" class="flex flex-col w-full lg:w-[55%]">
            <div class="flex flex-col items-start my-auto w-full font-medium max-md:mt-10">
              <p data-layername="featuredPost" class="text-base leading-none text-gray-800 uppercase tracking-[3px]">
                Featured Post
              </p>
              <h1 data-layername="stepByStepGuideToChoosingGreatFontPairs" class="mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800">
                Step-by-step guide to choosing great font pairs
              </h1>
              <p data-layername="byJohnDoeLMay232022" class="mt-4 text-sm leading-none text-amber-300">
                By <span class="text-amber-300">John Doe</span> | May 23, 2022
              </p>
              <p data-layername="description" class="mt-4 text-base leading-7 text-zinc-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <router-link
                to="/blogpost"
                data-layername="button"
                class="gap-3 px-12 py-4 mt-8 text-lg font-bold text-white bg-blue-600 max-md:px-5">
                Read More &gt;
              </router-link>
            </div>
          </section>
          <section data-layername="column" class="flex flex-col w-full lg:w-[45%]">
            <img loading="lazy" src="@/assets/images/misc/blog.png" alt="Illustration of the featured blog post" class="object-contain grow w-full aspect-[1.43] max-md:mt-10" />
          </section>
        </div>
      </div>
    </header>

    <!-- All Posts Section -->
    <section data-layername="allBlogs" class="text-left my-12">
      <h2 class="text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:text-4xl">
        All posts
      </h2>
      <hr class="mt-8 mb-10 w-full border border-zinc-500 opacity-32">
    </section>

    <!-- Blog Cards Section -->
    <section class="blog-cards mx-auto">
      <div class="flex flex-col gap-10">
        <!-- Blog Articles -->
        <div class="flex gap-5 items-center max-md:flex-col" v-for="article in articles" :key="article.id">
          <img 
            loading="lazy" 
            :src="article.imageSrc" 
            :alt="article.altText" 
            class="object-cover w-[40%] max-md:w-full"
          />
          <div class="w-[60%] max-md:w-full">
            <h2 class="text-pink-600 uppercase tracking-[3px]">{{ article.category }}</h2>
            <h3 class="mt-3 text-4xl font-bold tracking-tighter leading-10 text-gray-800">{{ article.title }}</h3>
            <p class="mt-4 leading-7 text-zinc-500">{{ article.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pagination -->
    <nav aria-label="Pagination" data-layername="pagination" class="flex justify-center items-center gap-4 font-bold text-center py-6">
      <button 
        data-layername="prev" 
        class="flex items-center text-lg text-gray-500 hover:text-blue-600 transition-colors duration-200"
        @click="goToPrevious"
      >
        &lt; <span class="ml-1">Prev</span>
      </button>
      <button 
        data-layername="next" 
        class="flex items-center text-lg text-gray-500 hover:text-blue-600 transition-colors duration-200"
        @click="goToNext"
      >
        <span class="mr-1">Next</span> &gt;
      </button>
    </nav>
  </div>
</template>

<script>
import blog1 from '@/assets/images/misc/blog1.png';
import blog2 from '@/assets/images/misc/blog2.png';
import blog3 from '@/assets/images/misc/blog3.png';
import blog4 from '@/assets/images/misc/blog4.png';
import blog5 from '@/assets/images/misc/blog1.png';

export default {
  name: 'BlogCards',
  data() {
    return {
      articles: [
        {
          id: 1,
          imageSrc: blog1,
          altText: "Design tips for designers image",
          category: "Startup",
          title: "Design tips for designers that cover everything you need",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
          id: 2,
          imageSrc: blog2,
          altText: "Design tips for designers image",
          category: "Startup",
          title: "Design tips for designers that cover everything you need",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
          id: 3,
          imageSrc: blog3,
          altText: "Design tips for designers image",
          category: "Startup",
          title: "Design tips for designers that cover everything you need",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
          id: 4,
          imageSrc: blog4,
          altText: "Design tips for designers image",
          category: "Startup",
          title: "Design tips for designers that cover everything you need",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
          id: 5,
          imageSrc: blog5,
          altText: "Design tips for designers image",
          category: "Startup",
          title: "Design tips for designers that cover everything you need",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
      ]
    };
  },
  methods: {
    goToPrevious() {
      // Implement previous page logic
    },
    goToNext() {
      // Implement next page logic
    }
  }
}
</script>

<style scoped>
/* Optional: Additional styling if needed */
</style>
