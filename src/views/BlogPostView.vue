<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import Join from '@/components/JoinContent.vue';
import Header from '@/components/BlogPost/BlogPostContent.vue';
</script>

<template>
    <MainLayout>
        <Header />
        <div class="mb-8">
            <Join />
        </div>
    </MainLayout>
</template>