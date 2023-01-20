<template>
  <div class="xl:w-3/4 xl:mx-auto">
    <h1>{{ demonstrator.title }}</h1>

    <SanityContent :blocks="demonstrator.body" :serializers="serializers" />
  </div>
</template>

<script setup>
import sanityImage from "~/components/sanityImage.vue";

const route = useRoute();
const query = groq`*[_type == "demonstrator" && slug.current == $slug][0]
 {
  title,
  number,
  body,
  slug
}`;

const { data: demonstrator } = await useSanityQuery(query, {
  slug: route.params.slug,
});

const serializers = {
  types: {
    image: sanityImage,
  },
};
</script>
