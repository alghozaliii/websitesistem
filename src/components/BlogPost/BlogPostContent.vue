<template>
    <div class="container mx-auto px-4 lg:px-8">
    <!-- Blog Header Section -->
      <header data-layername="blogInnerHeader" class="flex flex-col items-start font-bold text-gray-800 max-w-xl mx-auto my-6">
        <div class="flex gap-3 items-center text-xl tracking-tight text-amber-300">
          <img loading="lazy" src="@/assets/images/photo/org9.png" alt="Profile picture of Andrew Jonson" class="w-10 h-10 rounded-full object-cover" />
          <h1 class="opacity-90 text-yellow-300">Andrew Jonson</h1>
        </div>
        <p class="text-gray-500 text-base font-normal">Posted on 27th January 2022</p>
        
        <h2 class="mt-4 text-3xl tracking-tight leading-snug text-gray-800 max-md:text-2xl">
          Step-by-step guide to choosing great font pairs
        </h2>
        <div class="flex gap-2 items-center mt-3 text-lg">
          <img loading="lazy" src="@/assets/images/logo/startup.png" alt="Startup Icon" class="w-6 h-6" />
          <span class="text-gray-600">Startup</span>
        </div>
      </header>

    <!-- Blog Image Section -->
    <section class="w-full max-w-4xl mx-auto my-10">
      <img loading="lazy" src="@/assets/images/misc/blogpost.png" alt="Descriptive text for the image" class="object-cover w-full rounded-lg shadow-lg" />
    </section>

    <!-- Blog Content Section -->
    <article class="flex flex-col items-start text-base leading-relaxed max-w-3xl text-zinc-500 mx-auto space-y-6">
      <h1 class="text-4xl font-bold text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
      </p>
      <h2 class="text-4xl font-bold text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
      </p>
      <ul class="list-disc ml-5 text-xl font-bold text-gray-900 space-y-1">
        <li class="opacity-80">Lorem ipsum dolor sit amet</li>
        <li class="opacity-80">Non blandit massa enim nec scelerisque</li>
        <li class="opacity-80">Neque egestas congue quisque egestas</li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
      </p>
      <h2 class="text-4xl font-bold text-gray-800">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
      </p>
    </article>

    <!-- Other Posts Section -->
    <section data-layername="otherPosts" class="flex flex-col max-w-6xl mx-auto mt-16">
      <h2 class="text-4xl font-bold text-black text-center mb-8">
        What to read next
      </h2>
      <div class="flex flex-wrap gap-5 justify-center">
        <!-- Article Card 1 -->
        <article class="flex flex-col items-start w-full sm:w-[32%] bg-white shadow-md rounded-lg overflow-hidden p-5">
          <img loading="lazy" src="@/assets/images/misc/blog1.png" alt="Article preview image" class="object-cover w-full h-48 rounded-lg" />
          <p class="mt-4 text-sm font-medium text-amber-300">
            By <span class="text-amber-300">John Doe</span> | Aug 23, 2021
          </p>
          <h3 class="mt-2 text-2xl font-semibold text-gray-800">
            A UX Case Study Creating a Studious Environment for Students
          </h3>
          <p class="mt-2 text-base leading-6 text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </article>

         <!-- Article Card 2 -->
        <article class="flex flex-col items-start w-full sm:w-[32%] bg-white shadow-md rounded-lg overflow-hidden p-5">
          <img loading="lazy" src="@/assets/images/misc/blog2.png" alt="Article preview image" class="object-cover w-full h-48 rounded-lg" />
          <p class="mt-4 text-sm font-medium text-amber-300">
            By <span class="text-amber-300">John Doe</span> | Aug 23, 2021
          </p>
          <h3 class="mt-2 text-2xl font-semibold text-gray-800">
            A UX Case Study Creating a Studious Environment for Students
          </h3>
          <p class="mt-2 text-base leading-6 text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </article>

         <!-- Article Card 3 -->
        <article class="flex flex-col items-start w-full sm:w-[32%] bg-white shadow-md rounded-lg overflow-hidden p-5">
          <img loading="lazy" src="@/assets/images/misc/blog3.png" alt="Article preview image" class="object-cover w-full h-48 rounded-lg" />
          <p class="mt-4 text-sm font-medium text-amber-300">
            By <span class="text-amber-300">John Doe</span> | Aug 23, 2021
          </p>
          <h3 class="mt-2 text-2xl font-semibold text-gray-800">
            A UX Case Study Creating a Studious Environment for Students
          </h3>
          <p class="mt-2 text-base leading-6 text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </article>
        <!-- Repeat the above block for other article cards -->
      </div>
      <hr class="mt-16 border border-gray-300 opacity-30" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'BlogInnerHeader',
};
</script>

<style scoped>
/* Optional custom styling */
</style>
