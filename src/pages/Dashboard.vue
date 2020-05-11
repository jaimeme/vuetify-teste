<template>
  <v-app>
    <section>
      <v-row justify="center" align="center" rows="12">
        <v-col justify="center" align="start" cols="3">
          <v-card>
            <v-list class="py-0">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Olá {{conta}}!</v-list-item-title>
                  <v-list-item-subtitle>Drawer</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item v-for="item in items" :key="item.title"></v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-app>
</template>