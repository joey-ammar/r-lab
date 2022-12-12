<script setup>
const props = defineProps({
  submit: String
});
</script>
<template>
  <div class="d-flex justify-content-center mt-5">
    <Button class="btn-color" :label="props.submit" />
  </div>
</template>
<style scoped lang="scss">
@import "../../../sass/Basic.scss";
@import "../../../sass/Variable.scss";

.btn-color {
  background-color: $color_gitlab_dark_purple !important;
  border: 1px solid $color_gitlab_dark_purple;
  border-radius: 5px;
  color: white;
}
</style>
