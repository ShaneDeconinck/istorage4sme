<template>
  <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
    <select class="block md:hidden py-3 px-2 rounded shadow border-gray-50">
      <option v-for="page in pages">
        <NuxtLink
          :to="`/knowledgebase/${page.slug ? page.slug.current : ''}`"
          >{{ `${page.number} ${page.title}` }}</NuxtLink
        >
      </option>
    </select>

    <div class="hidden md:block md:w-1/4 2xl:w-1/3">
      <MenuComponent />
    </div>
    <div class="w-2/3">
      <h1>Kennisbank</h1>
      <p>Via het linker menu kan je doorheen onze kennisbank navigeren.</p>
    </div>
  </div>
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
