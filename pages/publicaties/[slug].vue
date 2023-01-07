<template>
  <div>
    <h1>{{ post.title }}</h1>

    <SanityContent :blocks="post.body" :serializers="serializers" />
  </div>
</template>

<script setup>
import sanityImage from "~/components/sanityImage.vue";

const route = useRoute();
const query = groq`*[_type == "post" && slug.current == $slug][0]
 {
  title,
  mainImage,
  body,
  slug
}`;

const { data: post } = await useSanityQuery(query, {
  slug: route.params.slug,
});

const serializers = {
  types: {
    image: sanityImage,
  },
};
</script>
