<template>
  <div class="xl:w-3/4 xl:mx-auto">
    <h2 class="border-0">Slotevent</h2>
    <SanityContent :blocks="closingEvent.body" />
    Presentaties:
    <ul>
      <li
        v-for="presentation in closingEvent.presentations"
        :key="presentation._ref"
      >
      <NuxtLink :to="presentation.file.asset.url" target="_blank">{{
          presentation.name
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
    
<script setup>
    import { buildFileUrl } from '@sanity/asset-utils';
    const query = groq`*[_type == "closingEvent"][0]{body, presentations[]{name, file{name, asset->{url}}}}`;
    const { data: closingEvent } = await useSanityQuery(query);
    const sanity = useSanity();
</script>