<template>
  <v-app-bar color="deep-purple accent-2" dense dark>
    <!-- dense retira os paddings que vem como padrão -->
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <!-- icone nav-bar padrão sanduíche -->
    <v-toolbar-title>He4rt Developers</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- sem o v-spacer o menu 3dots fica colado no title he4rtdev -->
    <v-menu left bottom>
      <!-- left bottom são pra controlar posição dos itens dentro do menu de três pontos -->
      <template v-slot:activator="{on}">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
          <!-- adicionando 3 pontos lado direito -->
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="({titulo,href},index) in itemLista" :key="index" @click="()=>{}">
          <v-list-item-title>{{titulo}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      itemLista: [
        { titulo: "Registrar", href: "" },
        { titulo: "Entrar", href: "" }
        // definindo itens dentro dos menus e suas rotas
      ]
    };
  }
};
</script>
<style scoped>
</style>
