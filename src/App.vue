<template>
  <metainfo>
    <template #title="{ content }">{{ content }}</template>
  </metainfo>
  <div>
    <div class="relative overflow-hidden">
      <page-header />
      <router-view />
      <page-footer />
    </div>
  </div>
</template>
<script>
import PageHeader from "./components/PageHeader.vue";
import PageFooter from "./components/PageFooter.vue";
import { useMeta, useActiveMeta } from "vue-meta/dist/vue-meta.esm-browser";

export default {
  components: { PageFooter, PageHeader },

  setup() {
    useMeta({
      title: "Switcheo Squad",
      htmlAttrs: { lang: "en" },
    });
    const metaInfo = useActiveMeta();
    return {
      metaInfo,
    };
  },
};
</script>
