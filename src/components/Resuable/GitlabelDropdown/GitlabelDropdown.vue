<script setup>
import { ref, computed, reactive } from "vue";
import Dropdown from "primevue/dropdown";

const props = defineProps({
  prefix: String,
  options: Array,
  about: String,
  full: String,
  modelValue: null,
});

/* essential for the component */
</script>
<template>
  <Dropdown
    class="label-team-two full-width mt-3"
    v-model="props.prefix"
    :options="props.options"
    :filter="true"
    :placeholder="props.about"
    :showClear="true"
  >
    <template #value="slotProps">
      <div class="p-dropdown-car-value" v-if="slotProps.value">
        <span>{{ slotProps.value.project }}</span>
      </div>
      <span v-else>
        {{ slotProps.placeholder }}
      </span>
    </template>
    <template #option="slotProps">
      <div class="p-dropdown-car-option okay">
        <span>{{ slotProps.option.project }}</span>
      </div>
    </template>
  </Dropdown>
</template>

<style scoped lang="scss">
.full-width {
  width: 100% !important;
}
</style>
