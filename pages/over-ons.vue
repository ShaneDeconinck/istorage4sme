<template>
  <div><SanityContent :blocks="generalContent.aboutUs" /></div>
</template>

<script setup>
const query = groq`*[_type == "generalContent"][0]{aboutUs}`;
const { data: generalContent } = await useSanityQuery(query);
</script>