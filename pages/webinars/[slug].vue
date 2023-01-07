<template>
  <div>
    <h1>{{ webinar.title }}</h1>

    <SanityContent :blocks="webinar.body" />
  </div>
</template>

<script setup>
const route = useRoute();
const query = groq`*[_type == "webinar" && slug.current == $slug][0]
 {
  title,
  number,
  body,
  slug
}`;
const { data: webinar } = await useSanityQuery(query, {
  slug: route.params.slug,
});
</script>
 