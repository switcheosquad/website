<template>
  <main>
    <div class="bg-white">
      <div
        class="
          max-w-7xl
          mx-auto
          py-16
          px-4
          sm:py-24 sm:px-6
          lg:px-8 lg:flex lg:justify-between
        "
      >
        <div class="max-w-xl">
          <h2
            class="
              text-4xl
              font-extrabold
              text-gray-900
              sm:text-5xl sm:tracking-tight
              lg:text-6xl
            "
          >
            Resources
          </h2>
          <p class="mt-5 text-xl text-gray-500">
            Voluptas culpa cupiditate enim laudantium officia dolorem.
          </p>
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
      title: "Resources",
    });
  },
};
</script>
