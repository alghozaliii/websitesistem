<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
// import JoinContent from '@/components/JoinContent.vue'

</script>

<template>
  <HeaderContent/>
  <main>
    <slot></slot>
  </main>
  <FooterContent/>
</template>
