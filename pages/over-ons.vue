<template>
  <h2 class="border-0">Over ons</h2>
  <div><SanityContent :blocks="generalContent.aboutUs" /></div>
</template>

<script setup>
const query = groq`*[_type == "generalContent"][0]{aboutUs}`;
const { data: generalContent } = await useSanityQuery(query);
</script>