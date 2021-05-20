<template>
  <main>
    <div
      class="
        pt-10
        bg-white
        dark:bg-gray-800
        sm:pt-16
        lg:pt-8
        lg:pb-14
        lg:overflow-hidden
      "
    >
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div
            class="
              mx-auto
              max-w-md
              px-4
              sm:max-w-2xl
              sm:px-6
              sm:text-center
              lg:px-0
              lg:text-left
              lg:flex
              lg:items-center
            "
          >
            <div class="lg:py-24">
              <h1
                class="
                  mt-4
                  text-4xl
                  tracking-tight
                  font-extrabold
                  text-gray-900
                  dark:text-gray-300
                  sm:mt-5
                  sm:text-6xl
                  lg:mt-6
                  xl:text-6xl
                "
              >
                <span class="block">Swag</span>
              </h1>
              <p
                class="
                  mt-3
                  text-base text-gray-500
                  dark:text-gray-400
                  sm:mt-5
                  sm:text-xl
                  lg:text-lg
                  xl:text-xl
                "
              >
                We're still working on bringing you some sweet swag. Check back
                soon!
              </p>
            </div>
          </div>
          <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div
              class="
                mx-auto
                max-w-md
                px-4
                sm:max-w-2xl
                sm:px-6
                lg:max-w-none
                lg:px-0
              "
            >
              <img
                class="
                  w-full
                  lg:absolute
                  lg:inset-y-0
                  lg:left-1/2
                  lg:h-full
                  lg:w-auto
                  lg:max-w-none
                "
                src="../../assets/hero-robot-alt.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <cta-newsletter />
  </main>
</template>
<script>
import CtaNewsletter from "../shared/CtaNewsletter.vue";
import { useMeta } from "vue-meta";

export default {
  components: { CtaNewsletter },
  setup() {
    useMeta({
      title: "Swag",
    });
  },
};
</script>
