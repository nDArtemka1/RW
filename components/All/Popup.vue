<template>
    <div ref="popup_wrapper" class="popup_wrapper">
        <div class="popup">
            <div class="popup-header">
                <div class="popup-header-img">
                    <nuxt-img
                        class="popup-header-close"
                        src="close.png"
                        alt="close"
                        @click.prevent="closePopup"
                    />
                </div>
            </div>
            <div class="popup-content"><slot></slot></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    mounted() {
        const vm = this;
        document.addEventListener("click", function (item) {
            if (item.target === vm.$refs.popup_wrapper) {
                vm.closePopup();
            }
        });
    },
    methods: {
        closePopup() {
            this.$emit("closePopup");
        },
    },
};
</script>

<style lang="scss">
.popup_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: #4b4b4b9c;
    z-index: 101;
}
.popup {
    padding: 20px;
    position: fixed;
    color: var(--black);
    background: var(--white);
    box-shadow: 0 0 5px 0 #e7e7e7;
    border-radius: 10px;
    z-index: 101;

    &-header {
        display: flex;
        flex-direction: row-reverse;
        img {
            width: 18px;
            transition: all 0.4s;
        }
        &-close:hover {
            transform: rotate(90deg);
            cursor: pointer;
        }
    }
    &-title {
        font-family: var(--GilroyBold);
        color: var(--darkBlue);
        font-size: 35px;
        text-align: center;
        margin-bottom: 25px;
    }
    &-img {
        width: 85vh;
    }
    &-form {
        margin: 50px;
    }
    form {
        max-width: 415px;
    }
}
.btn-close {
    cursor: pointer;
    transition: 0.4s;
}
.btn-close:hover {
    color: red;
}

@media (max-width: 769px) {
}

@media (max-width: 426px) {
    .popup {
        &-form {
            margin: 25px;
        }
        &-img {
            width: 100%;
            padding: 10px;
        }
        &-header {
            position: relative;
            &-img {
                display: flex;
                position: absolute;
                border-radius: 10px;
                border: 1px solid var(--brown);
                padding: 7px;
                background-color: var(--white);
                z-index: 102;
            }
        }
    }
}
</style>
