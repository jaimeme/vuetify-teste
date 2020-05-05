<template>
  <v-app>
    <p>Hello He4rt</p>
    <Header />
  </v-app>
</template>

<script>
import Header from "./components/header/Header";
export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {};
  }
};
</script>