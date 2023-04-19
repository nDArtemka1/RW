<template>
    <div class="scroll-to-top">
        <transition>
            <div @click="scrollToTop" class="scroll-to-top-svg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="scrollup-svg-icon"
                    width="32"
                    height="32"
                    viewBox="0 0 18 28"
                >
                    <path
                        d="M16.8 20.5c0 0.1-0.1 0.3-0.2 0.4l-0.8 0.8c-0.1 0.1-0.2 0.2-0.4 0.2-0.1 0-0.3-0.1-0.4-0.2l-6.1-6.1-6.1 6.1c-0.1 0.1-0.2 0.2-0.4 0.2s-0.3-0.1-0.4-0.2l-0.8-0.8c-0.1-0.1-0.2-0.2-0.2-0.4s0.1-0.3 0.2-0.4l7.3-7.3c0.1-0.1 0.2-0.2 0.4-0.2s0.3 0.1 0.4 0.2l7.3 7.3c0.1 0.1 0.2 0.2 0.2 0.4zM16.8 14.5c0 0.1-0.1 0.3-0.2 0.4l-0.8 0.8c-0.1 0.1-0.2 0.2-0.4 0.2-0.1 0-0.3-0.1-0.4-0.2l-6.1-6.1-6.1 6.1c-0.1 0.1-0.2 0.2-0.4 0.2s-0.3-0.1-0.4-0.2l-0.8-0.8c-0.1-0.1-0.2-0.2-0.2-0.4s0.1-0.3 0.2-0.4l7.3-7.3c0.1-0.1 0.2-0.2 0.4-0.2s0.3 0.1 0.4 0.2l7.3 7.3c0.1 0.1 0.2 0.2 0.2 0.4z"
                    ></path>
                </svg></div
        ></transition>
    </div>
</template>

<script>
export default {
    name: "scrollUp",
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style lang="scss">
.scroll-to-top {
    position: fixed;
    z-index: 100;
    padding: 8px;
    cursor: pointer;
    bottom: 20px;
    right: 20px;
    transition: all 0.4s;
    &-svg {
        padding: 5px;
        border: 2px solid var(--brown);
        transition: 0.5s;
        border-radius: 5px;
        cursor: pointer;
        bottom: 20px;
        right: 20px;
        background-color: var(--brown);
    }
    &-svg:hover {
        background-color: var(--white);
        svg {
            fill: var(--brown);
        }
    }
}
.scrollup-svg-icon {
    display: block;
    overflow: hidden;
    fill: var(--white);
    transition: all 0.4s;
}
</style>
