<template>
  <div class="relative bg-white dark:bg-gray-800 py-16 sm:py-24 lg:py-32">
    <div
      class="
        mx-auto
        max-w-md
        px-4
        text-center
        sm:max-w-3xl sm:px-6
        lg:px-8 lg:max-w-7xl
      "
    >
      <h2
        class="
          text-base
          font-semibold
          tracking-wider
          text-cyan-600
          dark:text-cyan-400
          uppercase
        "
      >
        Key Features
      </h2>
      <p
        class="
          mt-2
          text-3xl
          font-extrabold
          text-gray-900
          dark:text-gray-300
          tracking-tight
          sm:text-4xl
        "
      >
        Promote the platform you're invested in
      </p>
      <p
        class="
          mt-5
          max-w-prose
          mx-auto
          text-xl text-gray-500
          dark:text-gray-400
        "
      >
        Convincing traders to move platforms is a tough task, but these key
        features can be used as a tool to educate and inform.
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="pt-6">
            <div
              class="flow-root bg-gray-50 dark:bg-gray-900 rounded-lg px-6 pb-8"
            >
              <div class="-mt-6">
                <div>
                  <span
                    class="
                      inline-flex
                      items-center
                      justify-center
                      p-3
                      bg-gradient-to-r
                      from-teal-500
                      to-cyan-600
                      rounded-md
                      shadow-lg
                    "
                  >
                    <font-awesome-icon
                      :icon="feature.icon"
                      class="text-white"
                      size="lg"
                      fixed-width
                    />
                  </span>
                </div>
                <h3
                  class="
                    mt-8
                    text-lg
                    font-medium
                    text-gray-900
                    dark:text-gray-300
                    tracking-tight
                  "
                >
                  {{ feature.name }}
                </h3>
                <p class="mt-5 text-base text-gray-500 dark:text-gray-400">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const features = [
  {
    name: "Decentralized Exchange (Dex)",
    description:
      "A fully decentralized, censorship resistant platform that supports any type of financial market.",
    icon: ["fas", "globe"],
  },
  {
    name: "Spot & Futures Trading",
    description:
      "All the familiar features from centralized exchanges, on-chain and verifiable with low taker fees.",
    icon: ["fas", "balance-scale"],
  },
  {
    name: "On-boarding & Security",
    description:
      "Your keys, your crypto. Always have complete ownership of your funds and get started in less than a minute.",
    icon: ["fas", "shield-check"],
  },
  {
    name: "Ultimate Privacy",
    description:
      "Your personal information is never required to trade or transfer, so it can never be shared with a 3rd-party or stolen by bad actors.",
    icon: ["fas", "user-secret"],
  },
  {
    name: "Fair & Transparent Trading",
    description:
      "All trading activity is recorded transparently on the blockchain and order execution is randomized to prevent front-running.",
    icon: ["fas", "cube"],
  },
  {
    name: "Liquidity Mining",
    description:
      "Anyone can be a market-maker using Carbon liquidity pools. Put your extra cypto to work and earn rewards from trading fees.",
    icon: ["fas", "money-bill-wave-alt"],
  },
];

export default {
  setup() {
    return {
      features,
    };
  },
};
</script>
