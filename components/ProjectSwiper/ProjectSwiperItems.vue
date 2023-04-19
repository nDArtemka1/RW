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
        ><div class="popup-item-info" style="width: 100%; height: 100%">
            <ProjectSwiperItemInfo :activeUser="activeUser" />
            <button
                class="swiper-btn-prev"
                @click="indexActiveUser--"
                :disabled="indexActiveUser <= 0"
            ></button>
            <button
                class="swiper-btn-next"
                @click="indexActiveUser++"
                :disabled="indexActiveUser === catalogItems.length - 1"
            ></button>
        </div>
    </Popup>
    <div
        class="main-project-item"
        v-for="(item, index) in catalogItems"
        @click="indexActiveUser = index"
        :key="item.title"
    >
        <div class="main-project-item_img">
            <div
                @click.prevent="(showItemInfo = !showItemInfo), showModal()"
                class="main-project-item_img-a"
            >
                <nuxt-img
                    :src="item.catalogPathImg + item.img"
                    :alt="item.catalogLink"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Popup from "~~/components/All/Popup.vue";
import Form from "~~/components/All/Form.vue";
import ProjectSwiperItemInfo from "~~/components/ProjectSwiper/ProjectSwiperItemInfo.vue";

export default {
    props: {
        catalogItems: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    components: {
        Popup,
        Form,
        ProjectSwiperItemInfo,
    },
    data() {
        return {
            isVisible: false,
            showItemInfo: false,
            overflowBody: false,
            indexActiveUser: 0,
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
    computed: {
        activeUser() {
            return this.catalogItems[this.indexActiveUser];
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
    position: relative;
}
.main-project {
    &-items {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 25px;
        margin: 40px 25px 0 25px;
    }
    &-item {
        display: flex;
        flex-direction: column;
        border-bottom: 2px solid var(--lightOrange);
        justify-content: space-between;
        margin: 0;
        padding-bottom: 15px;
        &_img {
            &-a {
                position: relative;
                cursor: pointer;
                img {
                    width: 100%;
                    height: 350px;
                    border-radius: 10px 10px 0 0;
                    object-fit: cover;
                }
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
    &-item:nth-child(3) {
        grid-row: 1 / span 2;
        img {
            height: 750px;
        }
    }
    &-item:nth-child(4) {
        grid-column: 3 / span 2;
        grid-row: 1 / span 2;
        img {
            height: 750px;
        }
    }
    &-item:nth-child(6) {
        grid-column: 4 / span 1;
        grid-row: 3 / span 2;
        img {
            height: 750px;
        }
    }
    &-item:nth-child(11) {
        grid-column: 2 / span 1;
        grid-row: 4 / span 2;
        img {
            height: 750px;
        }
    }
    &-item:nth-child(18) {
        grid-column: 1 / span 1;
        grid-row: 7 / span 2;
        img {
            height: 750px;
        }
    }
    &-item:nth-child(25) {
        grid-column: 3 / span 2;
        grid-row: 6 / span 2;
        img {
            height: 750px;
        }
    }
    &-item:nth-child(29) {
        grid-column: 4 / span 1;
        grid-row: 9 / span 2;
        img {
            height: 750px;
        }
    }
    &-item:nth-child(30) {
        grid-column: 1 / span 2;
        grid-row: 10 / span 2;
        img {
            height: 750px;
        }
    }
    &-item:nth-child(43) {
        grid-column: 3 / span 1;
        grid-row: 13 / span 2;
        img {
            height: 750px;
        }
    }
    &-item:nth-child(50) {
        grid-column: 1 / span 2;
        grid-row: 15 / span 2;
        img {
            height: 750px;
        }
    }
    &-item:nth-child(51) {
        grid-column: 3 / span 1;
        grid-row: 17 / span 2;
        img {
            height: 750px;
        }
    }
}
.swiper-btn-prev,
.swiper-btn-next {
    position: absolute;
    top: var(--swiper-navigation-top-offset, 50%);
    padding: 15px;
    border: 1px solid var(--brown);
    border-radius: 10%;
    color: var(--darkBlue);
    background-color: var(--white);
    font-weight: 900;
    transition: all 0.4s;
    cursor: pointer;
    z-index: 150;
}

.swiper-btn-next:after {
    content: "❯";
    font-size: 22px;
}
.swiper-btn-prev:after {
    content: "❮";
    font-size: 22px;
}

.swiper-btn-next {
    right: var(--swiper-navigation-top-offset, -10%);
}
.swiper-btn-prev {
    left: var(--swiper-navigation-top-offset, -10%);
}

@media (max-width: 1500px) {
    .swiper-btn-next {
        right: var(--swiper-navigation-top-offset, 3%);
    }
    .swiper-btn-prev {
        left: var(--swiper-navigation-top-offset, 3%);
    }
}

@media (max-width: 1200px) {
    .main-project {
        &-item {
            &-info {
                width: auto;
            }
        }
    }
}

@media (max-width: 769px) {
    .main-project {
        &-item:nth-child(3) {
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
            img {
                height: 350px;
            }
        }
        &-item:nth-child(4) {
            grid-column: 1 / span 1;
            grid-row: 2 / span 1;
            img {
                height: 350px;
            }
        }
        &-item:nth-child(6) {
            grid-column: 1 / span 1;
            grid-row: 3 / span 1;
            img {
                height: 350px;
            }
        }
        &-item:nth-child(11) {
            grid-column: 1 / span 1;
            grid-row: 4 / span 1;
            img {
                height: 350px;
            }
        }
        &-item:nth-child(18) {
            grid-column: 1 / span 1;
            grid-row: 5 / span 1;
            img {
                height: 350px;
            }
        }
        &-item:nth-child(25) {
            grid-column: 1 / span 1;
            grid-row: 6 / span 1;
            img {
                height: 350px;
            }
        }
        &-item:nth-child(29) {
            grid-column: 1 / span 1;
            grid-row: 7 / span 1;
            img {
                height: 350px;
            }
        }
        &-item:nth-child(30) {
            grid-column: 1 / span 1;
            grid-row: 8 / span 1;
            img {
                height: 350px;
            }
        }
        &-item:nth-child(43) {
            grid-column: 1 / span 1;
            grid-row: 9 / span 1;
            img {
                height: 350px;
            }
        }
        &-item:nth-child(50) {
            grid-column: 1 / span 1;
            grid-row: 10 / span 1;
            img {
                height: 350px;
            }
        }
        &-item:nth-child(51) {
            grid-column: 1 / span 1;
            grid-row: 11 / span 1;
            img {
                height: 350px;
            }
        }
    }
}

@media only screen and (min-width: 426px) and (max-width: 769px) {
    .popup-item-info {
        max-width: 1200px;
    }

    .main-project {
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
    .main-project {
        &-items {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 25px;
            margin: 0;
        }
        &-item:last-child {
            margin-left: 0;
        }
    }
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
    }
}
@media (max-width: 376px) {
    .main-project {
        padding-top: 40px;

        &-items {
            margin: 0 15px;
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
    }
}
</style>
