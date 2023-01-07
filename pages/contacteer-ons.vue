<template>
  <div><SanityContent :blocks="generalContent.contactUs" /></div>
</template>
  
  <script setup>
const query = groq`*[_type == "generalContent"][0]{contactUs}`;
const { data: generalContent } = await useSanityQuery(query);
</script>