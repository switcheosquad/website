<template>
  <Popover as="header" class="relative">
    <div class="bg-cyan-900 py-5 sm:py-4">
      <nav
        class="
          relative
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-4
          sm:px-6
        "
        aria-label="Global"
      >
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <router-link :to="{ name: 'index' }">
              <span class="sr-only">Switcheo Squad</span>
              <img
                class="h-8 w-auto sm:h-10"
                src="../assets/logo.png"
                alt="Switcheo Squad"
              />
            </router-link>
            <div class="-mr-2 flex items-center md:hidden">
              <PopoverButton
                class="
                  bg-cyan-900
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:bg-gray-800
                  focus:outline-none
                  focus:ring-2
                  focus-ring-inset
                  focus:ring-white
                "
              >
                <span class="sr-only">Open main menu</span>
                <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
              </PopoverButton>
            </div>
          </div>
          <div class="hidden space-x-8 md:flex md:ml-10">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              class="text-base font-medium text-white hover:text-gray-300"
              >{{ item.name }}</router-link
            >
          </div>
        </div>
      </nav>
    </div>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-md
            bg-white
            dark:bg-gray-800
            ring-1 ring-black ring-opacity-5
            overflow-hidden
          "
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                class="h-8 w-auto"
                src="../assets/logo.png"
                alt="Switcheo Squad"
              />
            </div>
            <div class="-mr-2">
              <PopoverButton
                class="
                  bg-white
                  dark:bg-gray-900
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2 focus:ring-inset focus:ring-cyan-600
                "
              >
                <span class="sr-only">Close menu</span>
                <font-awesome-icon :icon="['fas', 'times']" />
              </PopoverButton>
            </div>
          </div>
          <div class="py-5">
            <div class="px-2 space-y-1">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                class="
                  block
                  px-3
                  py-2
                  rounded-md
                  text-base
                  font-medium
                  text-gray-900
                  dark:text-gray-100
                  hover:bg-gray-50
                  dark:hover:bg-gray-900
                "
                >{{ item.name }}</router-link
              >
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const navigation = [
  { name: "Swag", to: { name: "swag" } },
  // { name: "Resources", to: { name: "resources" } },
  // { name: "Sponsors", to: { name: "sponsors" } },
];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>
