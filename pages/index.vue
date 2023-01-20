<template>
  <div class="xl:w-3/4 xl:mx-auto">
    <SanityContent :blocks="generalContent.home" />
  </div>
</template>

<script setup>
const query = groq`*[_type == "generalContent"][0]{home}`;
const { data: generalContent } = await useSanityQuery(query);
</script>