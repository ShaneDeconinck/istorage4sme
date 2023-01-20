<template>
  <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
    <MobileMenuComponent />
    <div class="hidden md:block md:w-1/4 2xl:w-1/3">
      <MenuComponent />
    </div>
    <div>
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