<script setup>
const props = defineProps({
  icon: String,
  placeholder: String,
  value: String,
});
</script>

<template>
  <div class="p-inputgroup">
    <span class="p-inputgroup-addon">
      <i :class="props.icon"></i>
    </span>
    <Textarea
      :placeholder="placeholder"
      :type="type"
      :value="value"
      :icon="icon"
      rows="2"
      cols="10"
    />
  </div>
</template>

<style scoped lang="scss"></style>
