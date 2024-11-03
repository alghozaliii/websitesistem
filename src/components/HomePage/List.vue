<template>
  <section class="flex flex-col gap-10 items-center text-zinc-500">
    <!-- List of Authors Section -->
    <h1 class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800">
      List of Authors
    </h1>
    <main class="mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-10 justify-center max-md:flex-col">
        <article
          v-for="author in authors"
          :key="author.id"
          class="flex flex-col w-1/5 items-center max-md:ml-0 max-md:w-full transition-transform duration-300 transform hover:scale-105"
          @mousedown="activeCard = author.id"
          @mouseup="activeCard = null"
          :class="{ 'bg-active': activeCard === author.id }"
        >
          <div class="flex flex-col grow items-center px-6 py-8 w-full leading-none max-md:px-5 max-md:mt-8 rounded-lg bg-zinc-100">
            <img :src="author.image" :alt="author.name" loading="lazy" class="object-contain w-24 h-24 max-w-full rounded-full aspect-square" />
            <h2 class="mt-5 text-xl font-bold tracking-tighter text-gray-800">
              {{ author.name }}
            </h2>
            <p class="self-stretch text-sm text-center text-zinc-500">
              Content Writer @Company
            </p>
            <div class="flex gap-2 mt-3">
              <a v-for="(icon, index) in author.socialIcons" :key="index" :href="icon.link" class="text-gray-500 transition-colors duration-300 hover:text-blue-600">
                <img :src="icon.iconSrc" class="w-5 h-5" alt="Social Icon" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </main>

    <section data-layername="logoComponent" class="flex flex-wrap gap-10 items-start text-zinc-500" aria-labelledby="featured-section-title">
      <header class="flex flex-col self-start mt-0">
        <h2 id="featured-section-title">
          <span class="self-start text-sm leading-none opacity-60">We are</span>
          <span class="block text-2xl font-bold leading-none">Featured in</span>
        </h2>
      </header>
      
      <!-- Adjusted logo images with specific size control -->
      <img 
        loading="lazy" 
        src="@/assets/images/logo/logo1.png" 
        alt="Featured publication logo 1"
        class="object-contain grow shrink-0 my-auto w-24 h-auto max-md:max-w-full" 
      />
      <img 
        loading="lazy" 
        src="@/assets/images/logo/logo2.png" 
        alt="Featured publication logo 2"
        class="object-contain grow shrink-0 my-auto w-24 h-auto max-md:max-w-full" 
      />
      <img 
        loading="lazy" 
        src="@/assets/images/logo/logo3.png" 
        alt="Featured publication logo 3"
        class="object-contain grow shrink-0 my-auto w-24 h-auto max-md:max-w-full" 
      />
      <img 
        loading="lazy" 
        src="@/assets/images/logo/logo4.png" 
        alt="Featured publication logo 4"
        class="object-contain grow shrink-0 my-auto w-24 h-auto max-md:max-w-full" 
      />
      <img 
        loading="lazy" 
        src="@/assets/images/logo/logo5.png" 
        alt="Featured publication logo 5"
        class="object-contain grow shrink-0 my-auto w-24 h-auto max-md:max-w-full" 
      />
    </section>
  </section>
</template>

<script>
import org1 from '@/assets/images/photo/org1.png';
import org2 from '@/assets/images/photo/org2.png';
import org3 from '@/assets/images/photo/org3.png';
import org4 from '@/assets/images/photo/org4.png';
import facebookIcon from '@/assets/images/icons/face.png';
import twitterIcon from '@/assets/images/icons/twit.png';
import instagramIcon from '@/assets/images/icons/ins.png';
import linkedinIcon from '@/assets/images/icons/link.png';

export default {
  name: 'LogoAndAuthors',
  data() {
    return {
      activeCard: null,
      authors: [
        {
          id: 1,
          name: 'Floyd Miles',
          image: org1,
          socialIcons: [
            { iconSrc: facebookIcon, link: '#' },
            { iconSrc: twitterIcon, link: '#' },
            { iconSrc: instagramIcon, link: '#' },
            { iconSrc: linkedinIcon, link: '#' },
          ]
        },
        {
          id: 2,
          name: 'Dianne Russell',
          image: org2,
          socialIcons: [
            { iconSrc: facebookIcon, link: '#' },
            { iconSrc: twitterIcon, link: '#' },
            { iconSrc: instagramIcon, link: '#' },
            { iconSrc: linkedinIcon, link: '#' },
          ]
        },
        {
          id: 3,
          name: 'Jenny Wilson',
          image: org3,
          socialIcons: [
            { iconSrc: facebookIcon, link: '#' },
            { iconSrc: twitterIcon, link: '#' },
            { iconSrc: instagramIcon, link: '#' },
            { iconSrc: linkedinIcon, link: '#' },
          ]
        },
        {
          id: 4,
          name: 'Leslie Alexander',
          image: org4,
          socialIcons: [
            { iconSrc: facebookIcon, link: '#' },
            { iconSrc: twitterIcon, link: '#' },
            { iconSrc: instagramIcon, link: '#' },
            { iconSrc: linkedinIcon, link: '#' },
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.bg-active {
  background-color: #fde68a; /* Warna efek aktif */
  transition: background-color 0.3s ease;
}

builder-component {
  max-width: none !important;
}
</style>
