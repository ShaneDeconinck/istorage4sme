<template>
  <ul class="nav">
    <li v-for="page in pages">
      <NuxtLink :to="`/knowledgebase/${page.slug ? page.slug.current : ''}`">{{
        `${page.number} ${page.title}`
      }}</NuxtLink>

      <hr />
      <ul class="ml-2 mt-4" v-if="page.children != null">
        <li v-for="page in page.children" v-if="page.children != null">
          <NuxtLink
            :to="`/knowledgebase/${page.slug ? page.slug.current : ''}`"
            >{{ `${page.number} ${page.title}` }}</NuxtLink
          >
          <hr />
          <ul class="ml-2" v-if="page.children != null">
            <li v-for="page in page.children">
              <NuxtLink
                :to="`/knowledgebase/${page.slug ? page.slug.current : ''}`"
                >{{ `${page.number} ${page.title}` }}</NuxtLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
const query = groq`*[_type == "knowledgeBasePage" && level == 1] | order(number asc)
 {
  title,
  number,
  body,
  slug,
  children[]->{
    title,
    number,
    body,
    slug,
    children[]-> {
      title,
      number,
      body, 
      slug
    }
  }
}`;
const { data: pages } = await useSanityQuery(query);
</script>

<style>
ul#menu {
  @apply w-1/5;
}

li {
  @apply mb-3 text-sm flex-wrap;
}

li ul {
  @apply mt-3;
}
</style>