<template>
    <div class="main-calc">
        <Popup v-show="isVisible" @closePopup="closePopup"
            ><div class="popup-form">
                <h2 class="popup-form-title">Оставьте заявку на замер</h2>

                <Form /></div
        ></Popup>
        <div class="main-calc-title">
            <h3>Вызвать мастера на замер</h3>
        </div>
        <div class="btn">
            <a class="main-calc-btn" @click.prevent="isVisible = !isVisible">
                <span class="underline"> Вызвать мастера </span>
            </a>
        </div>
    </div>
</template>

<script>
import Popup from "~~/components/All/Popup.vue";
import Form from "~~/components/All/Form.vue";

export default {
    components: {
        Popup,
        Form,
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
.main-calc {
    padding: 35px;
    display: flex;
    justify-content: space-around;
    border: 2px solid var(--lightOrange);
    border-radius: 10px;
    box-shadow: 0 5px 8.2px 1.8px rgb(0 0 0 / 6%);
    margin-top: 25px;
    &-title {
        font-size: 22px;
    }
    &-btn {
        border: 2px solid var(--brown);
        background-color: var(--lightOrange);
        color: var(--black);
        border-radius: 10px;
        padding: 15px 40px;
        cursor: pointer;
        transition: 0.4s;
        font-size: 18px;
    }
}

@media (max-width: 426px) {
    .main-calc {
        display: flex;
        flex-direction: column;
        align-items: center;
        &-title {
            font-size: 19px;
            margin-bottom: 40px;
            text-align: center;
        }
    }
}
</style>
