<template>
    <div class="contact-step">
        <div class="contact-step-flex">
            <nuxt-img
                :src="`contacts/${stepData.img}`"
                :alt="stepData.img"
                @click.prevent="isVisible = !isVisible"
                style="width: 100%; height: 500px; object-fit: cover"
            />
            <Popup v-if="isVisible" @closePopup="closePopup">
                <nuxt-img
                    :src="`contacts/${stepData.img}`"
                    :alt="stepData.img"
                    class="popup-img"
                    @click.prevent="isVisible = !isVisible"
                />
            </Popup>
            <div class="contact-step-title">{{ stepData.title }}</div>
        </div>
    </div>
</template>

<script>
import Popup from "~~/components/All/Popup.vue";

export default {
    props: {
        stepData: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    components: {
        Popup,
    },
    data() {
        return { isVisible: false };
    },
    methods: {
        closePopup() {
            this.isVisible = false;
        },
    },
};
</script>

<style lang="scss">
.contact-steps {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 20px;
}

.contact-step {
    border-bottom: 2px solid var(--lightOrange);
    box-shadow: 0 5px 8.2px 1.8px rgb(0 0 0 / 6%);
    &-flex {
        img {
            cursor: zoom-in;
        }
    }

    &-title {
        margin: 15px 10px;
    }
}

@media (max-width: 426px) {
    .contact-steps {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
