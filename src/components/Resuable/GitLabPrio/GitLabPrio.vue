<script setup>
const props = defineProps({
    color: '',
    prefix: null,
    value: null
})
</script>
<template>

    <div class="bg" :style="{ backgroundColor: props.color }">
        <span class="prio">{{ props.prefix }}</span>
        <span class="num">{{ props.value }}</span>
    </div>

</template>
<style scoped lang="scss">

@import "../../../sass/Basic.scss";
@import "../../../sass/Variable.scss";

.bg {
    font-size: 1.3rem;
    display: inline-block;
    border-radius: 1rem;
    color: white;
    font-weight: 800;

    .prio {
        padding: 1rem;
        border-radius: 1rem;
    }

    .num {
        padding: 1rem;
        border-left: 1px solid white;
        border-radius: 1rem;
    }
}
</style>