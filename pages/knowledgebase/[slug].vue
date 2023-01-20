<template>
  <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
    <div class="hidden md:block md:w-1/3">
      <MenuComponent />
    </div>
    <div class="xl:w-2/3">
      <h1>{{ page.number }} {{ page.title }}</h1>
      <SanityBlocks :blocks="page.body" :serializers="serializers" />
    </div>
  </div>
</template>

<script setup>
import { SanityBlocks } from "sanity-blocks-vue-component";

const route = useRoute();
const queryPage = groq`*[_type == "knowledgeBasePage" && slug.current == $slug][0]
 {
  title,
  number,
  body,
  slug
}`;
const { data: page } = await useSanityQuery(queryPage, {
  slug: route.params.slug,
});
const serializers = {
  types: {
    // This is how to access a component registered by `@nuxt/components`
    image: resolveComponent("SanityImage"),
    table: resolveComponent("SanityTable"),
  },
};
</script>
 
