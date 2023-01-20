<template>
  <div class="xl:w-3/4 xl:mx-auto">
    <MobileMenuComponent class="lg:hidden w-full block" />
    <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <MenuComponent class="hidden lg:block md:w-1/4 2xl:w-1/3 mt-12" />
      <div>
        <h1>Kennisbank</h1>
        <p class="hidden lg:block">
          Via het linker menu kan je doorheen onze kennisbank navigeren.
        </p>
        <p class="block lg:hidden">
          Via het bovenstaand menu kan je doorheen onze kennisbank navigeren.
        </p>
      </div>
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