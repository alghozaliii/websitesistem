<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout copy.vue';
import Join from '@/components/JoinContent.vue';
import BlogContent from '@/components/Blog/BlogContent.vue';
import Category from '@/components/Blog/Category.vue';
</script>

<template>
    <MainLayout>
        <BlogContent />
        <div class="mb-8">
            <Category  />
        </div>
        <div class="mb-8">
            <Join />
        </div>
    </MainLayout>
</template>