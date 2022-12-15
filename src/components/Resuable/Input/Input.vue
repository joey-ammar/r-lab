<script setup>
const props = defineProps({
  icon: String,
  placeholder: String,
  value: String,
  disabled: String,
});

</script>

<template>
  <div class="p-inputgroup">
    <span class="p-inputgroup-addon">
      <i :class="props.icon"></i>
    </span>
    <InputText :type="type" :value="value" :placeholder="placeholder" />
  </div>
</template>

<style scoped lang="scss">
  @import "../../../sass/Basic.scss";
  @import "../../../sass/Variable.scss";
  @media
       screen and (min-width: $bp-desktop-small) and (max-width: $bp-content-shift),
       screen and (min-width: $bp-content-shift)  {
        input {
          padding: 20px 10px;
          font-size: 20px;
        }
}
</style>
