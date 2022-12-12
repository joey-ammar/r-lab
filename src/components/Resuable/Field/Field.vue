<script setup>
defineProps({
  label: String,
});
</script>

<template>
  <div class="field">
    <label v-if="label">{{ $t(label) }}</label>
    <slot></slot>
  </div>
</template>
