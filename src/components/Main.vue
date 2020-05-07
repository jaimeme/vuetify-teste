<template>
  <v-app>
    <div>
      <!-- <Header /> -->
      <section class="d-flex flex-column justify-center align-center pt-10">
        <img :src="require('@/assets/logo.png')" width="200px" alt="Logo Vue" class="pt-5" />
        <!-- pt-10(padding top) -- pa-2(padding "all")-->
        <p class="front-weight-bold display-2 pt-5">Vue4Noobs</p>
        <!-- display-2 is tipography "size" -->
        <span class="text--secondary">Pela: He4rt Developers</span>
        <div class="my-2 p-5">
          <!-- my == vertical margin -->
          <v-btn
            color="deep-purple mr-2"
            dark
            medium
            href="https://github.com/Novout/vue4noobs"
            target="_blank"
          >Repositório</v-btn>
          <!-- target blank open a new page for redirect to href-->
          <!-- perguntar sobre o medium, aparenta ser tipografia mas não há mudança de estilo quando ponho outras como black ou bold -->
          <v-btn
            color="deep-purple ml-2"
            dark
            medium
            href="https://discord.io/He4rt"
            target="_blank"
          >He4rt Discord</v-btn>
        </div>
      </section>
    </div>
  </v-app>
</template>
<script>
export default {
  name: "Main",
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>