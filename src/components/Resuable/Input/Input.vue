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

</style>
