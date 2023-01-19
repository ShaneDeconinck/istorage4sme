<template>
  <div>
    <h1>{{ webinar.title }}</h1>

    <SanityBlocks :blocks="webinar.description" :serializers="serializers" />

    <div class="flex flex-col space-y-4">
      <SanityVideo
        v-for="video in webinar.videos"
        :key="video._key"
        :title="video.title"
        :type="video.type"
        :videoId="video.videoId"
      />
    </div>
  </div>
</template>

<script setup>
import { SanityBlocks } from "sanity-blocks-vue-component";
const route = useRoute();
const query = groq`*[_type == "webinar" && slug.current == $slug][0]
 {
  title,
  number,
  description,
  mainImage,
  videos,
  slug
}`;
const { data: webinar } = await useSanityQuery(query, {
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
 