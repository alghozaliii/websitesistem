<template>
  <section class="featured-posts flex flex-col">
    <header class="flex gap-5 justify-between text-4xl font-bold leading-none text-gray-800 max-md:mr-0.5 max-md:max-w-full">
      <h2 class="tracking-tighter">Featured Post</h2>
      <h2 class="tracking-tighter">All Posts</h2>
      <a href="#" class="my-auto text-base leading-7 text-amber-300">View All</a>
    </header>
    <div class="mt-8 w-full max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col items-start p-8 mx-auto w-full font-bold border border-solid border-white max-md:px-5 max-md:mt-8 max-md:max-w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfb0d3ca1fd606cd766cf3cd4d51374bd4a453944889e98ed87ce23a11d9cac1?placeholderIfAbsent=true&apiKey=4403a8f96f2f4610a2aa817af3063966" alt="Featured post image" class="object-contain self-stretch w-full aspect-[1.9] max-md:max-w-full" />
            <p class="mt-8 text-sm font-medium leading-none text-amber-300">
              By <span class="text-amber-300">John Doe</span> l May 23, 2022
            </p>
            <h3 class="self-stretch mt-4 text-3xl tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </h3>
            <p class="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <a href="#" class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 max-md:px-5">
              Read More &gt;
            </a>
          </div>
        </article>
        <aside class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
            <article v-for="(post, index) in recentPosts" :key="index" :class="['flex flex-col items-start py-7 pr-20 pl-8 max-md:px-5 max-md:max-w-full', index % 2 === 1 ? 'bg-orange-50' : 'bg-white']">
              <p class="text-sm font-medium leading-none text-amber-300">
                By <span class="text-amber-300">{{ post.author }}</span> l {{ post.date }}
              </p>
              <h3 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                {{ post.title }}
              </h3>
            </article>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface RecentPost {
  author: string;
  date: string;
  title: string;
}

export default defineComponent({
  name: 'FeaturedPosts',
  data() {
    return {
      recentPosts: [
        {
          author: 'John Deo',
          date: 'Aug 23, 2021',
          title: '8 Figma design systems that you can download for free today.'
        },
        {
          author: 'John Doe',
          date: 'Aug 23, 2021',
          title: '8 Figma design systems that you can download for free today.'
        },
        {
          author: 'John Doe',
          date: 'Aug 23, 2021',
          title: '8 Figma design systems that you can download for free today.'
        },
        {
          author: 'John Doe',
          date: 'Aug 23, 2021',
          title: '8 Figma design systems that you can download for free today.'
        }
      ] as RecentPost[]
    };
  }
});
</script>