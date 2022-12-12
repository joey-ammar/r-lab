<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavigationVue from "./components/Navigation/Navigation.vue";
</script>

<template>
  <NavigationVue />
  <RouterView />
</template>

<style lang="scss">
@import "sass/Variable.scss";
@import "sass/Basic.scss";

@font-face {
  font-family: "Bold";
  src: local("Bold"),
    url(../public/fonts/montserrat.bold.ttf) format("truetype");
}

@font-face {
  font-family: "Regular";
  src: local("Regular"),
    url(../public/fonts/montserrat.regular.ttf) format("truetype");
}

@font-face {
  font-family: "Light";
  src: local("Light"),
    url(../public/fonts/Montserrat-Light.ttf) format("truetype");
}

*,
*::after,
*::before {
  @include reset_margin_padding;
  @include remove_list;
}
body {
  background-color: $color_body !important;
}
</style>
