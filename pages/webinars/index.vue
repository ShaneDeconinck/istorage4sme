<template>
  <div class="flex space-x-4">
    <ul>
      <li v-for="webinar in webinars">
        <NuxtLink
          :to="`/webinars/${webinar.slug ? webinar.slug.current : ''}`"
          >{{ webinar.title }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
    
    <script setup>
const query = groq`*[_type == "webinar" ] 
     {
      title,
      slug
    }`;
const { data: webinars } = await useSanityQuery(query);
</script>