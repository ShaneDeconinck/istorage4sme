<template>
  <div class="flex flex-wrap py-2">
    <div class="w-full">
      <nav
        class="
          relative
          flex flex-wrap
          items-center
          justify-between
          px-2
          py-3
          bg-gray-50
          rounded
        "
      >
        <div
          class="
            container
            px-4
            mx-auto
            flex flex-wrap
            items-center
            justify-between
          "
        >
          <div
            class="
              w-full
              relative
              flex
              justify-between
              lg:w-auto
              px-4
              lg:static lg:block lg:justify-start
            "
          >
            <span
              class="
                text-sm
                font-semibold
                leading-relaxed
                inline-block
                mr-4
                py-2
                whitespace-nowrap
                uppercase
                text-gray-700
              "
            >
              Menu
            </span>
            <button
              class="
                text-gray-700
                cursor-pointer
                text-xl
                leading-none
                px-3
                py-1
                border border-solid border-transparent
                rounded
                bg-transparent
                block
                lg:hidden
                outline-none
                focus:outline-none
              "
              type="button"
              v-on:click="toggleNavbar()"
            >
              <Bars3Icon class="h-6 w-6 text-gray-700" />
            </button>
          </div>
          <div
            v-bind:class="{ hidden: !menuShow, flex: menuShow }"
            class="lg:flex lg:flex-grow items-center"
          >
            <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li class="mb-0">
                <NuxtLink
                  class="
                    pl-4
                    py-2
                    flex
                    items-center
                    text-xs
                    uppercase
                    font-semibold
                    leading-snug
                    text-gray-700
                    hover:opacity-75
                  "
                  to="/"
                  >Home</NuxtLink
                >
              </li>
              <li class="mb-0">
                <NuxtLink
                  class="
                    pl-4
                    py-2
                    flex
                    items-center
                    text-xs
                    uppercase
                    font-semibold
                    leading-snug
                    text-gray-700
                    hover:opacity-75
                  "
                  to="/over-ons"
                  >Over ons</NuxtLink
                >
              </li>
              <li class="mb-0">
                <NuxtLink
                  class="
                    pl-4
                    py-2
                    flex
                    items-center
                    text-xs
                    uppercase
                    font-semibold
                    leading-snug
                    text-gray-700
                    hover:opacity-75
                  "
                  to="/knowledgebase"
                  >Kennisdatabank</NuxtLink
                >
              </li>
              <li class="mb-0">
                <NuxtLink
                  class="
                    pl-4
                    py-2
                    flex
                    items-center
                    text-xs
                    uppercase
                    font-semibold
                    leading-snug
                    text-gray-700
                    hover:opacity-75
                  "
                  to="/slotevent"
                  >Slotevent</NuxtLink
                >
              </li>
              <li class="mb-0">
                <NuxtLink
                  class="
                    pl-4
                    py-2
                    flex
                    items-center
                    text-xs
                    uppercase
                    font-semibold
                    leading-snug
                    text-gray-700
                    hover:opacity-75
                  "
                  to="/demonstrators"
                  >Demonstrators</NuxtLink
                >
              </li>
              <li class="mb-0">
                <NuxtLink
                  class="
                    pl-4
                    py-2
                    flex
                    items-center
                    text-xs
                    uppercase
                    font-semibold
                    leading-snug
                    text-gray-700
                    hover:opacity-75
                  "
                  to="/webinars"
                  >Webinars</NuxtLink
                >
              </li>
              <li class="mb-0">
                <NuxtLink
                  class="
                    pl-4
                    py-2
                    flex
                    items-center
                    text-xs
                    uppercase
                    font-semibold
                    leading-snug
                    text-gray-700
                    hover:opacity-75
                  "
                  to="/publicaties"
                  >Publicaties</NuxtLink
                >
              </li>
              <li class="mb-0">
                <NuxtLink
                  class="
                    pl-4
                    py-2
                    flex
                    items-center
                    text-xs
                    uppercase
                    font-semibold
                    leading-snug
                    text-gray-700
                    hover:opacity-75
                  "
                  to="/contacteer-ons"
                  >Contacteer ons</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
  
  <script>
import { Bars3Icon } from "@heroicons/vue/24/solid";

export default {
  name: "menu",
  components: { Bars3Icon },
  data() {
    return {
      menuShow: false,
    };
  },
  watch: {
    $route() {
      this.menuShow = false;
    },
  },
  methods: {
    toggleNavbar: function () {
      this.menuShow = !this.menuShow;
    },
  },
};
</script>