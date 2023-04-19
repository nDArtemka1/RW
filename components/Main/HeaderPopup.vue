<template>
    <div class="header-popup container">
        <h1 class="header-popup-title">Изготовление деревянной мебели</h1>
        <div>
            <Popup v-show="isVisible" @closePopup="closePopup"
                ><div class="popup-form">
                    <h2 class="popup-form-title">Оставить заявку на расчет</h2>
                    <Form /></div
            ></Popup>

            <div class="container btn">
                <button class="btn-popup" @click="showPopupInfo">
                    <span class="underline"> Оставить заявку на расчет</span>
                </button>
            </div>
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
        showPopupInfo() {
            this.isVisible = true;
        },
        closePopup() {
            this.isVisible = false;
        },
    },
};
</script>

<style lang="scss">
.header-popup {
    padding-bottom: 100px;
    color: var(--white);
    &-title {
        margin-top: 200px;
        width: 700px;
        font-size: 45px;
        font-weight: 600;
    }
}
.btn {
    &-popup {
        background: var(--transparent);
        border: 1px solid var(--white);
        color: var(--white);
        border-radius: 10px;
        box-shadow: 0 0 4px 0 #e7e7e7;
        margin: 50px 0;
        padding: 15px;
        font-size: 20px;
        cursor: pointer;
        transition: 0.4s;
    }
}
.popup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    &-title {
        margin-bottom: 20px;
    }
}

@media (max-width: 769px) {
    .header-popup {
        display: flex;
        flex-direction: column;
        align-items: center;
        &-title {
            text-align: center;

            margin-top: 0;
        }
    }
}

@media only screen and (min-width: 425px) and (max-width: 769px) {
    .header-popup {
        padding-top: 200px;
        padding-bottom: 100px;
    }
}

@media only screen and (min-width: 200px) and (max-width: 426px) {
    .header-popup {
        padding-top: 200px;
        padding-bottom: 100px;
        &-title {
            width: 100%;
            font-size: 35px;
        }
    }
    .popup-form {
        padding-bottom: 0;
        margin-top: 50px;
    }
}
</style>
