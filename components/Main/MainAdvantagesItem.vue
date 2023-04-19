<template>
    <div class="advantages-item">
        <div class="advantages-item_img">
            <nuxt-img
                id="myImg"
                :src="`main/${itemData.img}`"
                :alt="itemData.img"
                @click.prevent="isVisible = !isVisible"
            />
        </div>
        <Popup v-if="isVisible" @closePopup="closePopup">
            <div class="popup-img">
                <nuxt-img
                    :src="`main/${itemData.img}`"
                    :alt="itemData.img"
                    @click.prevent="isVisible = !isVisible"
                />
            </div>
        </Popup>

        <div class="advantages-item_flex">
            <h3 class="advantages-item_title">{{ itemData.title }}</h3>
            <p
                v-html="itemData.description"
                class="advantages-item_description"
            ></p>
        </div>
    </div>
</template>

<script>
import Popup from "~~/components/All/Popup.vue";

export default {
    props: {
        itemData: {
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
.popup-img {
    padding: 25px 35px;
}
.advantages {
    &-items {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    &-item:nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    &-item {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        border: 2px solid var(--lightOrange);
        border-radius: 10px;
        box-shadow: 0 5px 8.2px 1.8px rgb(0 0 0 / 6%);
        word-wrap: break-word;
        &_flex {
            width: 480px;
        }

        &_title {
            font-family: var(--GilroyMedium);
            font-size: 21px;
            margin-bottom: 10px;
        }
        &_description {
            font-size: 18px;
            color: var(--gray);
            strong {
                color: var(--black);
            }
        }

        &_img {
            align-items: center;
            margin-right: 20px;
            margin-bottom: 20px;
            user-select: none;
            img {
                width: 500px;
                height: 300px;
                cursor: zoom-in;
            }
        }
    }
    &-item:first-child {
        flex-direction: row;
        justify-content: space-around;
        p {
            margin-left: 35px;
        }
    }
}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
    .advantages {
        &-items {
            display: flex;
            flex-wrap: wrap;
        }
        &-item {
            width: 48%;
            &_img {
                img {
                    width: 550px;
                    height: 300px;
                }
            }
            &_flex {
                width: 100%;
            }
        }

        &-item:first-child {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
        }
    }
}

@media only screen and (min-width: 426px) and (max-width: 769px) {
    .advantages {
        &-items {
            display: flex;
            flex-direction: column;
        }
        &-item {
            &_img {
                margin-right: 0;
            }
            &_flex {
                width: 100%;
                margin: 0 20px;
            }
        }
        &-item:first-child {
            display: flex;
            flex-direction: column;
        }
        &-item:nth-child(2) {
            flex-direction: row-reverse;
        }
        &-item:nth-child(3) {
            flex-direction: row;
        }
        &-item:nth-child(4) {
            flex-direction: row-reverse;
        }
        &-item:nth-child(5) {
            flex-direction: row;
        }
    }
}

@media only screen and (min-width: 200px) and (max-width: 426px) {
    .popup-img {
        padding: 10px;
    }
    .advantages {
        &-items {
            display: flex;
            flex-direction: column;
        }
        &-item {
            &_img {
                margin-right: 0;
            }
            &_flex {
                width: 100%;
                margin: 0 20px;
            }
            &_title {
                font-size: 19px;
            }
            &_description {
                font-size: 17px;
            }
        }
        &-item:first-child {
            display: flex;
            flex-direction: column;
            p {
                margin-left: 0;
            }
        }
    }
}
</style>
