<template>
  <div class="bg-white">
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
export default {
  components: { PageFooter, PageHeader },
};
</script>
