<template>
  <div class="">
    <header class="mb-8 xl:w-3/4 xl:mx-auto">
      <h1>TETRA iStorage4SME</h1>
      <p>
        Intelligente Geavanceerde Anomalie Detectie bij de opslag en transport
        in de voedingsketen
      </p>
      <NavComponent />
    </header>
    <main>
      <slot />
    </main>
    <footer
      class="text-sm border-t border-blue-400 mt-8 pt-2 xl:w-3/4 xl:mx-auto"
    >
      <div class="flex lg:flex-row space-x-5 flex-wrap mb-4">
        <img class="cover h-16 my-2" src="~/assets/logos/howest.png" />
        <img class="cover h-12 my-2" src="~/assets/logos/inagro.svg" />
        <span class="lg:pl-12 my-2">Met de steun van:</span>
        <img class="cover h-12 my-2" src="~/assets/logos/flanders-food.png" />
        <img class="cover h-8 my-2" src="~/assets/logos/vlaio.svg" />
      </div>
      &copy; Howest 2023
    </footer>
  </div>
</template>