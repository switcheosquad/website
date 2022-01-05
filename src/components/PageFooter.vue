<template>
  <footer class="bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav
        class="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        <div v-for="item in navigation" :key="item.name" class="px-5 py-2">
          <router-link
            :to="item.to"
            class="
              text-base text-gray-500
              hover:text-gray-900
              dark:text-gray-400 dark:hover:text-gray-500
            "
            >{{ item.name }}</router-link
          >
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <a
          v-for="item in social"
          :key="item.name"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">{{ item.name }}</span>
          <font-awesome-icon :icon="item.icon" size="lg" />
        </a>
      </div>
      <p class="mt-8 text-center text-base text-gray-400">
        &copy; 2021 Switcheo Squad. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
const navigation = [
  // { name: "Swag", to: { name: "swag" } },
  // { name: "Resources", to: { name: "resources" } },
  // { name: "Sponsors", to: { name: "sponsors" } },
  { name: "Code of Conduct", to: { name: "conduct" } },
  { name: "Privacy Policy", to: { name: "privacy" } },
  { name: "Disclaimer", to: { name: "disclaimer" } },
];
const social = [
  {
    name: "Telegram",
    href: "https://t.me/swthsquad",
    icon: ["fab", "telegram"],
  },
  // {
  //   name: "Facebook",
  //   href: "#",
  //   icon: ["fab", "facebook"],
  // },
  // {
  //   name: "Instagram",
  //   href: "#",
  //   icon: ["fab", "instagram"],
  // },
  {
    name: "Twitter",
    href: "https://twitter.com/switcheosquad",
    icon: ["fab", "twitter"],
  },
  {
    name: "GitHub",
    href: "https://github.com/switcheosquad",
    icon: ["fab", "github"],
  },
  {
    name: "Discord",
    href: "https://discord.gg/SPh62Hf",
    icon: ["fab", "discord"],
  },
];

export default {
  setup() {
    return {
      navigation,
      social,
    };
  },
};
</script>
