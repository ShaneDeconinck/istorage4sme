<template>
  <div class="xl:w-3/4 xl:mx-auto">
    <h2 class="border-0">Demonstrators</h2>
    <div>
      <ul>
        <li
          v-for="demonstrator in demonstrators"
          :key="demonstrator._ref"
          class="flex space-x-4"
        >
          <SanityImage
            :asset="demonstrator.mainImage.asset"
            class="w-20 lg:w-40"
          />
          <NuxtLink
            class="flex-wrap"
            :to="`/demonstrators/${
              demonstrator.slug ? demonstrator.slug.current : ''
            }`"
            >{{ demonstrator.title }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script setup>
const query = groq`*[_type == "demonstrator" ] 
   {
    title,
    mainImage,
    slug
  }`;
const { data: demonstrators } = await useSanityQuery(query);
</script>