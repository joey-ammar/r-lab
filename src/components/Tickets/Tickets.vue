<script setup>
import { reactive } from "vue";
import { useTicketStore } from "../../stores/Store";
import Mainform from "../Mainform/MainForm.vue";
let saveTicketInStore = useTicketStore();
</script>
<template>
  <!--
  <h1>{{ saveTicketInStore.ticketNumberStore }}</h1>
-->

  <Mainform />
</template>

<style scoped lang="scss">
@import "../../sass/Basic.scss";
@import "../../sass/Variable.scss";
</style>
