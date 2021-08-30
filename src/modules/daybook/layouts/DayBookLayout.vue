<template>
  <Navbar />
  <div class="d-flex">
    <div class="col 4">
      <EntryList />
    </div>
    <div class="col">
      <router-view />
    </div>
  </div>
</template>

<script>
// import Navbar from "../components/Navbar.vue";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Navbar: defineAsyncComponent(() => import("../components/Navbar.vue")),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
};
</script>

<style>
</style>