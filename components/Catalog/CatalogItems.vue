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
        ><div class="popup-item-info">
            <CatalogItemInfo :catalogData="catalogData" /></div
    ></Popup>
    <div class="catalog-item">
        <div class="catalog-item_img">
            <div
                @click.prevent="(showItemInfo = !showItemInfo), showModal()"
                class="catalog-item_img-a"
            >
                <nuxt-img
                    :src="catalogData.catalogPathImg + catalogData.img"
                    :alt="catalogData.title"
                />
                <div class="overlay">
                    <div class="overlay-btn">
                        <span class="underline">Быстрый просмотр</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="catalog-item_flex">
            <div class="catalog-item_flex-p">
                <p
                    class="catalog-item_p"
                    @click.prevent="(showItemInfo = !showItemInfo), showModal()"
                >
                    <strong>{{ catalogData.title }}</strong>
                </p>
            </div>
        </div>
        <div class="catalog-item_button-wrap">
            <div
                class="catalog-item_button"
                @click.prevent="isVisible = !isVisible"
            >
                <span> Узнать стоимость </span>
            </div>
        </div>
    </div>
</template>

<script>
import Popup from "~~/components/All/Popup.vue";
import Form from "~~/components/All/Form.vue";
import CatalogItemInfo from "~~/components/Catalog/CatalogItemInfo.vue";

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
        CatalogItemInfo,
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
.popup-item-info {
    max-width: 1200px;
    height: 80%;
}
.catalog {
    &-items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
    }
    &-item {
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid var(--lightOrange);
        justify-content: space-between;
        &_img {
            &-a {
                position: relative;
                height: 400px;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px 10px 0 0;
                    object-fit: cover;
                }
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 400px;
                    background-color: rgba(58, 56, 56, 0.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: 0.5s;
                    border-radius: 10px 10px 0 0;
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
                overflow-y: scroll;
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

@media only screen and (min-width: 769px) and (max-width: 1200px) {
}

@media only screen and (min-width: 426px) and (max-width: 769px) {
    .popup-item-info {
        max-width: 100vh;
        height: 85vh;
    }
    .catalog {
        &-items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
        &-item {
            &_img {
                img {
                    height: 350px;
                }
                &-a {
                    height: 350px;
                    .overlay {
                        top: 0;
                        height: 350px;
                    }
                }
            }
        }
    }
}

@media (max-width: 426px) {
    .popup-item-info {
        max-width: 100vh;
        height: 85vh;
        overflow-y: scroll;
    }
    .catalog {
        padding-top: 40px;

        &-items {
            display: flex;
            flex-wrap: wrap;
        }
        &-item {
            width: 46%;
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
    .catalog {
        padding-top: 40px;

        &-items {
            display: flex;
        }
        &-item {
            width: 100%;
            &_img {
                &-a {
                    height: 300px;
                    .overlay {
                        top: 0;
                        height: 300px;
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
    .catalog {
        padding-top: 40px;

        &-items {
            display: flex;
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
