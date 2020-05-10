<template>
  <v-app>
    <v-content>
      <v-container class="fill-heigh" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="deep-purple" dark flat>
                <!-- toolbar add in a v-card -->
                <v-toolbar-title>Formulário de Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Conta" type="text" color="deep-purple" v-model="conta" />
                  <v-text-field label="Senha" type="password" color="deep-purple" v-model="senha" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <!-- A container for actions in a card like buttons, applies margin -->
                <v-card-text>
                  Não possui uma conta?
                  <span to="/register">
                    <router-link
                      to="/register"
                      style="text-decoration: none;color:purple"
                    >Clique aqui</router-link>
                  </span>
                </v-card-text>
                <v-btn color="deep-purple" dark>Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      conta: "",
      senha: ""
    };
  }
};
</script>