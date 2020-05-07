<template>
  <v-app>
    <Header />
    <Main />
  </v-app>
</template>

<script>
import Header from "../components/header/Header";
import Main from "../components/Main";
// import Header from "./src/pages/Home.vue";
export default {
  name: "App",
  components: {
    Header,
    Main
  },
  data() {
    return {};
  }
};
</script>