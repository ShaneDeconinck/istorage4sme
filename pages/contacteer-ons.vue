<template>
  <div class="xl:w-3/4 xl:mx-auto">
    <h2 class="border-0">Contacteer ons</h2>
    <SanityContent :blocks="generalContent.contactUs" />
  </div>
</template>
  
  <script setup>
const query = groq`*[_type == "generalContent"][0]{contactUs}`;
const { data: generalContent } = await useSanityQuery(query);
</script>