<template>
  <div class="mx-auto 2xl:w-3/4">
    <header class="mx-auto mb-8">
      <h1>TETRA iStorage4SME</h1>
      <p>
        Intelligente Geavanceerde Anomalie Detectie bij de opslag en transport
        in de voedingsketen
      </p>
      <nav class="border-b border-blue-400 py-4">
        <ul class="flex flex-col md:flex-row md:space-y-0 md:space-x-4 mb-0">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/over-ons">Over ons</NuxtLink></li>
          <li><NuxtLink to="/knowledgebase">Kennisdatabank</NuxtLink></li>
          <li><NuxtLink to="/demonstrators">Demonstrators</NuxtLink></li>
          <li><NuxtLink to="/webinars">Webinars</NuxtLink></li>
          <li><NuxtLink to="/publicaties">Publicaties</NuxtLink></li>
          <li><NuxtLink to="/contacteer-ons">Contacteer ons</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="text-sm border-t border-blue-400 mt-8 pt-2">
      <div class="flex space-x-5">
        <img class="cover h-16" src="~/assets/logos/howest.png" />
        <img class="cover h-12" src="~/assets/logos/inagro.svg" />
        <span class="pl-12">Met de steun van:</span>
        <img class="cover h-12" src="~/assets/logos/flanders-food.png" />
        <img class="cover h-8" src="~/assets/logos/vlaio.svg" />
      </div>
      &copy; Howest 2023
    </footer>
  </div>
</template>