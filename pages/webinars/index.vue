<template>
  <div class="xl:w-3/4 xl:mx-auto">
    <h2>Webinars</h2>
    <div class="flex space-x-4">
      <ul>
        <li
          v-for="webinar in webinars"
          :key="webinar._ref"
          class="flex space-x-4"
        >
          <SanityImage :asset="webinar.mainImage.asset" class="w-20 lg:w-40" />
          <NuxtLink
            :to="`/webinars/${webinar.slug ? webinar.slug.current : ''}`"
            >{{ webinar.title }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
    
    <script setup>
const query = groq`*[_type == "webinar" ] 
     {
      title,
      mainImage,
      slug
    }`;
const { data: webinars } = await useSanityQuery(query);
</script>