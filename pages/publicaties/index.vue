<template>
  <div class="flex space-x-4">
    <h2 class="border-0">Publicaties</h2>
    <ul>
      <li v-for="post in posts" :key="post._key">
        <NuxtLink :to="`/publicaties/${post.slug ? post.slug.current : ''}`">{{
          post.title
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
  
  <script setup>
const query = groq`*[_type == "post" ] 
   {
    title,
    mainImage,
    slug
  }`;
const { data: posts } = await useSanityQuery(query);
</script>