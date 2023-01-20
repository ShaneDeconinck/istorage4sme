<template>
  <div class="xl:w-3/4 xl:mx-auto">
    <h2 class="border-0">Publicaties</h2>
    <div class="flex space-x-4">
      <ul>
        <li v-for="post in posts" :key="post._key">
          <NuxtLink
            :to="`/publicaties/${post.slug ? post.slug.current : ''}`"
            >{{ post.title }}</NuxtLink
          >
        </li>
      </ul>
    </div>
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