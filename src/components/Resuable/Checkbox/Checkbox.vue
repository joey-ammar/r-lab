<script setup>

</script>
<template>
  <div class="form-check form-switch mt-3">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
    <label class="form-check-label" for="flexSwitchCheckChecked">{{ $t('Planned') }}</label>
  </div>
</template>
<style scoped lang="scss">
  @import "../../../sass/Basic.scss";
  @import "../../../sass/Variable.scss";

  @media
       screen and (min-width: $bp-desktop-small) and (max-width: $bp-content-shift),
       screen and (min-width: $bp-content-shift)  {
        input  {
          padding: 10px;
        }
        label {
          font-size: 20px;
        }
  }


</style>
