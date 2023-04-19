<template>
    <div class="main-stage-sale">
        <div class="main-stage-sale-title container">
            <h2 class="main-title">
                <span>Что нужно сделать для того, чтобы заказать мебель?</span>
            </h2>
        </div>
        <Stages />
    </div>
</template>

<script>
import Stages from "~/components/Main/Stages.vue";

export default {
    components: {
        Stages,
    },
};
</script>

<style lang="scss"></style>
