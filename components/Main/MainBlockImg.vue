<template>
    <div class="main-block-img">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Object,
            default() {
                return {};
            },
        },
    },
};
</script>

<style lang="scss">
.main-block-img {
    background-repeat: no-repeat;
    background-size: 100% auto;
}
</style>
