<template>
  <h2 class="border-0">Demonstrators</h2>
  <div class="flex space-x-4">
    <ul>
      <li v-for="demonstrator in demonstrators">
        <NuxtLink
          :to="`/demonstrators/${
            demonstrator.slug ? demonstrator.slug.current : ''
          }`"
          >{{ demonstrator.title }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
  
  <script setup>
const query = groq`*[_type == "demonstrator" ] 
   {
    title,
    slug
  }`;
const { data: demonstrators } = await useSanityQuery(query);
</script>