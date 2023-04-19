<template>
    <div>
        <Popup v-show="isVisible" @closePopup="closePopup"
            ><div class="popup-form">
                <h3 class="popup-form-title">Задайте вопрос прямо сейчас!</h3>
                <p class="popup-form-description">
                    Консультация по всем вопросам - бесплатно!
                </p>
                <Form /></div
        ></Popup>

        <div class="catalog-item-info">
            <div class="catalog-item-info_img">
                <CatalogSwiperItemInfoSwiper
                    :activeUser="activeUser"
                    :activeUserImg="activeUser.catalogImgs"
                />
            </div>
            <div class="catalog-item-info-desription">
                <div class="catalog-item-info-desription-p">
                    <p
                        class="catalog-item-info_p"
                        @click.prevent="showItemInfo = !showItemInfo"
                    >
                        <strong>{{ activeUser.title }}</strong>
                    </p>

                    <!-- <p class="catalog-item-info_p-materials">
                    {{ catalogData.materials }}
                </p>
                <p class="catalog-item-info_p-materials">
                    {{ catalogData.description }}
                </p> -->
                </div>
                <div class="catalog-item-info_button-wrap">
                    <div
                        class="catalog-item-info_button"
                        @click.prevent="isVisible = !isVisible"
                    >
                        <span> Узнать стоимость </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Popup from "~~/components/All/Popup.vue";
import Form from "~~/components/All/Form.vue";
import CatalogSwiperItemInfoSwiper from "~~/components/CatalogSwiper/CatalogSwiperItemInfoSwiper.vue";

export default {
    props: {
        activeUser: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    components: {
        Popup,
        Form,
        CatalogSwiperItemInfoSwiper,
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

<style lang="scss" scoped>
.catalog {
    &-item-info {
        margin: 20px 40px 20px 40px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 25px;
        &-desription-p {
            text-align: center;
        }
        &_img {
            grid-column: 1 / span 2;
            .mySwiperTop {
                height: 600px;
                margin-bottom: 25px;
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
    .catalog {
        &-item-info {
            grid-template-columns: repeat(1, 1fr);
            width: 100%;
            max-height: 750px;
            overflow-y: scroll;
            margin: 20px 0;
            &_img {
                padding: 0 70px;
            }
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
@media (max-width: 426px) {
    .catalog {
        &-item-info {
            grid-template-columns: repeat(1, 1fr);
            width: 100%;
            max-height: 750px;
            overflow-y: scroll;
            margin: 20px 0;
            &_img {
                padding: 0 60px;
            }
        }
    }
}

@media only screen and (min-width: 200px) and (max-width: 426px) {
    .popup {
        padding: 10px;
    }
    .catalog {
        &-item-info {
            grid-template-columns: repeat(1, 1fr);

            overflow-y: scroll;
            margin: 20px 0;
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
