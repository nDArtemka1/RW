<template>
    <Popup v-show="isVisible" @closePopup="closePopup"
        ><div class="popup-form">
            <h3 class="popup-form-title">Задайте вопрос прямо сейчас!</h3>
            <p class="popup-form-description">
                Консультация по всем вопросам - бесплатно!
            </p>
            <Form /></div
    ></Popup>
    <Popup v-show="showItemInfo" @closePopup="closePopup"
        ><div class="popup-materials-info">
            <MaterialsItemInfo :catalogData="catalogData" /></div
    ></Popup>
    <div class="materials-item">
        <div class="materials-item_img">
            <div
                @click.prevent="(showItemInfo = !showItemInfo), showModal()"
                class="materials-item_img-a"
            >
                <nuxt-img
                    :src="catalogData.catalogPathImg + catalogData.img"
                    :alt="catalogData.catalogLink"
                />
                <div class="overlay">
                    <div class="overlay-btn">
                        <span class="underline">Подробнее</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="materials-item_flex">
            <div class="materials-item_flex-p">
                <p
                    class="materials-item_p"
                    @click.prevent="(showItemInfo = !showItemInfo), showModal()"
                >
                    <strong>{{ catalogData.title }}</strong>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Popup from "~~/components/All/Popup.vue";
import Form from "~~/components/All/Form.vue";
import MaterialsItemInfo from "~~/components/Materials/MaterialsItemInfo.vue";

export default {
    props: {
        catalogData: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    components: {
        Popup,
        Form,
        MaterialsItemInfo,
    },
    data() {
        return {
            isVisible: false,
            showItemInfo: false,
            overflowBody: false,
        };
    },
    methods: {
        closePopup() {
            this.isVisible = false;
            this.showItemInfo = false;
            this.overflowBody = false;
            document.body.classList.remove("body-overflow");
        },
        showModal() {
            this.overflowBody = true;
            document.body.classList.add("body-overflow");
        },
    },
};
</script>

<style lang="scss">
.body-overflow {
    overflow: hidden;
}

.materials {
    &-items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;
        .popup {
            max-width: 1200px;
        }
        .popup-materials-info {
            height: 80vh;
            overflow-y: scroll;
        }
    }
    &-item {
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid var(--lightOrange);
        justify-content: space-between;
        &_img {
            &-a {
                position: relative;
                height: 250px;
                img {
                    width: 100%;
                    height: 100%;

                    object-fit: cover;
                }
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 250px;
                    background-color: rgba(58, 56, 56, 0.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: 0.5s;

                    cursor: pointer;
                }
                .overlay-btn {
                    opacity: 1;
                    position: absolute;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    cursor: pointer;
                    padding: 14px 15px;
                    color: var(--white);
                    border: 1px solid var(--white);
                    .underline::after {
                        background: var(--white);
                    }
                    a {
                        color: var(--white);
                    }
                }
            }
            &-a:hover .overlay {
                opacity: 1;
            }
        }
        &_flex {
            display: flex;
            flex-direction: column;

            &-p {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
        }
        &_title {
            margin: 20px;
        }
        &_p {
            margin: 20px 0;
            cursor: pointer;
            &-materials {
                margin: 10px 0;
            }
        }
        &_a {
            padding: 10px 15px;
            border: 2px solid var(--lightOrange);
            border-radius: 10px;
            margin-right: 20px;
        }
        &_button {
            width: 100%;
            padding: 10px 15px;
            font-size: 17px;
            border: 2px solid var(--lightOrange);
            transition: all 0.4s;
            background-color: var(--white);
            border-radius: 5px;
            color: var(--black);
            cursor: pointer;
            margin-bottom: 20px;
            text-align: center;
            &-wrap {
                display: flex;
                justify-content: space-around;
            }
        }
        &_button:hover {
            border: 2px solid var(--brown);
            background-color: var(--lightOrange);
        }
    }
}

@media (max-width: 1150px) {
    .materials {
        &-items {
            .popup {
                max-width: 100%;
            }
            .popup-materials-info {
                height: 80vh;
                overflow-y: scroll;
            }
        }
    }
}
@media (max-width: 1025px) {
    .materials {
        &-items {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            .popup {
                max-width: 100%;
            }
            .popup-materials-info {
                height: 80vh;
                overflow-y: scroll;
            }
        }
    }
}

@media only screen and (min-width: 426px) and (max-width: 769px) {
    .materials {
        &-items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            .popup {
                max-width: 100%;
            }
            .popup-materials-info {
                height: 80vh;
                overflow-y: scroll;
            }
        }
        &-item {
            &_img {
                img {
                    height: 300px;
                }
                &-a {
                    height: 300px;
                    .overlay {
                        top: 0;
                        height: 300px;
                    }
                }
            }
        }
    }
}

@media (max-width: 426px) {
    .popup-materials-info {
        max-width: 425px;
        height: 85vh;
        overflow-y: scroll;
    }
    .materials {
        padding-top: 40px;

        &-items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        &-item {
            width: 100%;
            &_img {
                &-a {
                    height: 200px;
                    .overlay {
                        top: 0;
                        height: 200px;
                    }
                }
            }
            &_title {
                margin: 20px 0;
            }
        }
        &-item:last-child {
            margin-left: 0;
        }
    }
}

@media (max-width: 376px) {
    .popup-materials-info {
        max-width: 375px;
        height: 85vh;
    }
    .materials {
        padding-top: 40px;

        &-items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        &-item {
            width: 100%;
            &_img {
                &-a {
                    height: 170px;
                    .overlay {
                        top: 0;
                        height: 170px;
                    }
                }
            }
            &_title {
                margin: 20px 0;
            }
        }
        &-item:last-child {
            margin-left: 0;
        }
    }
}

@media (max-width: 321px) {
    .popup-materials-info {
        max-width: 320px;
        height: 85vh;
        overflow-y: scroll;
    }
    .materials {
        padding-top: 40px;

        &-items {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }
        &-item {
            width: 100%;
            &_img {
                &-a {
                    height: 200px;
                    .overlay {
                        top: 0;
                        height: 200px;
                    }
                }
            }
            &_title {
                margin: 20px 0;
            }
        }
        &-item:last-child {
            margin-left: 0;
        }
    }
}
</style>
