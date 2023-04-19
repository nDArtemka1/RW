<template>
    <Popup v-show="isVisible" @closePopup="closePopup"
        ><div class="popup-form">
            <h3 class="popup-form-title">Задайте вопрос прямо сейчас!</h3>
            <p class="popup-form-description">
                Консультация по всем вопросам - бесплатно!
            </p>
            <Form /></div
    ></Popup>

    <div class="materials-item-info">
        <div class="materials-item-info_img">
            <MaterialsItemInfoSwiper
                :catalogData="catalogData"
                :catalogDataImg="catalogData.catalogImgs"
            />
        </div>
        <div class="materials-item-info-desription">
            <div class="materials-item-info-desription-p">
                <p
                    class="materials-item-info_p"
                    @click.prevent="showItemInfo = !showItemInfo"
                >
                    <strong>{{ catalogData.title }}</strong>
                </p>

                <p class="materials-item-info_p-materials">
                    {{ catalogData.materials }}
                </p>
                <div
                    class="materials-item-info_p-materials"
                    v-html="catalogData.description"
                ></div>
                <div
                    class="materials-item-info_p-materials"
                    v-html="catalogData.description2"
                ></div>
            </div>
            <div class="materials-item-info_button-wrap">
                <div
                    class="materials-item-info_button"
                    @click.prevent="isVisible = !isVisible"
                >
                    <span> Узнать стоимость </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Popup from "~~/components/All/Popup.vue";
import Form from "~~/components/All/Form.vue";
import MaterialsItemInfoSwiper from "~~/components/Materials/MaterialsItemInfoSwiper.vue";

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
        MaterialsItemInfoSwiper,
    },
    data() {
        return {
            isVisible: false,
            showItemInfo: false,
        };
    },
    methods: {
        closePopup() {
            this.isVisible = false;
            this.showItemInfo = false;
        },
    },
};
</script>

<style lang="scss">
.materials {
    &-item-info {
        margin: 20px 40px 20px 40px;
        grid-gap: 25px;
        &_img {
            .mySwiperTop {
                height: 600px;
                padding-bottom: 35px;
                .swiper-slide {
                    border-bottom: none;
                    box-shadow: none;
                }
            }
            .mySwiperBottom {
                height: 125px;
                .swiper-slide {
                    border-bottom: none;
                    box-shadow: none;
                    img {
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
        }

        &_flex {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 15px;
            max-width: 350px;
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
            margin: 10px 0;
            cursor: pointer;
            strong {
                font-family: var(--GilroyBold);
            }
            &-materials {
                margin: 10px 0;
                strong {
                    font-family: var(--GilroyBold);
                }
                ul li {
                    font-size: 18px;
                    line-height: 18px;
                    position: relative;
                    margin-top: 10px;
                    margin-left: 50px;
                }
                ul li::before {
                    color: var(--brown);
                    /* UTF-8 escape sequence, соответствующая символу "Маркер списка" */
                    content: "\2022";
                    /* Делаем больше, чем основной текст в li */
                    font-size: 26px;
                    font-weight: 700;
                    /* Элемент вырван из потока, выравниваем отрицательным отступом */
                    left: -15px;
                    /* Высота строки и позиционирование необходимы для выравнивания по вертикали */
                    line-height: 18px;
                    position: absolute;
                    top: 0;
                }
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
                width: 100%;
                margin-top: 20px;
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
    .materials {
        &-item-info {
            grid-template-columns: repeat(1, 1fr);
            width: 100%;
            max-height: 750px;
            margin: 20px 5px;
            .mySwiperTop {
                height: 100%;
                padding: 0 0 35px 0;
                .swiper-slide img {
                    height: 550px;
                }
            }
            .mySwiperBottom {
                display: none;
            }
        }
    }
}

@media only screen and (min-width: 200px) and (max-width: 426px) {
    .popup {
        padding: 10px;
    }
    .materials {
        &-item-info {
            grid-template-columns: repeat(1, 1fr);
            margin: 20px 5px;
            &-desription {
                margin-left: 10px;
            }
            .mySwiperTop {
                height: 100%;
                padding: 0 0 35px 0;
                .swiper-slide img {
                    height: 460px;
                }
            }

            .mySwiperBottom {
                display: none;
            }
        }
    }
}
</style>
