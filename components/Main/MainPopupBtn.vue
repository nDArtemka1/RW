<template>
    <div class="main-btn">
        <transition name="fade"
            ><Popup v-show="isVisible" @closePopup="closePopup"
        /></transition>

        <div class="btn">
            <a class="main-popup-btn" @click.prevent="isVisible = !isVisible">
                <span class="underline"> Оставить заявку </span>
            </a>
        </div>
    </div>
</template>

<script>
import Popup from "~~/components/All/Popup.vue";

export default {
    components: {
        Popup,
    },
    data() {
        return {
            isVisible: false,
        };
    },
    methods: {
        closePopup() {
            this.isVisible = false;
        },
    },
};
</script>

<style lang="scss">
.main-popup-btn {
    border: 2px solid var(--brown);
    background-color: var(--lightOrange);
    color: var(--black);
    border-radius: 10px;
    padding: 10px 15px;
    cursor: pointer;
    transition: 0.4s;
}
</style>
