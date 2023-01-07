<template>
  <div class="mx-auto 2xl:w-3/4">
    <header class="mx-auto mb-16">
      <h1>iStorage4SME</h1>
      <nav class="mb-4 border-b border-blue-400 py-4">
        <ul
          class="flex flex-col space-y-1 md:flex-row md:space-y-0 md:space-x-4"
        >
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
      &copy; Howest 2023
    </footer>
  </div>
</template>