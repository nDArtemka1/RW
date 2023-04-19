<template class="container">
    <swiper
        :modules="[Navigation, Pagination]"
        :navigation="true"
        class="mySwiperTop"
        :pagination="{
            dynamicBullets: true,
            clickable: true,
        }"
        :breakpoints="{
            200: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            321: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
        }"
    >
        <swiper-slide
            v-for="img in activeUserImg"
            :key="img"
            style="width: 100%"
        >
            <nuxt-img
                :src="activeUser.catalogPathImg + img"
                :alt="activeUser.catalogLink"
            />
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/grid";

import { FreeMode, Navigation, Pagination, Grid } from "swiper";

export default {
    props: {
        activeUser: {
            type: Object,
            default() {
                return {};
            },
        },
        activeUserImg: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            FreeMode,
            Navigation,
            Pagination,
            Grid,
        };
    },
};
</script>

<style lang="scss" scoped>
.mySwiperTop {
    .swiper-button-next,
    .swiper-button-prev {
        top: var(--swiper-navigation-top-offset, 50%);
        padding: 15px;
        border: 1px solid var(--brown);
        border-radius: 10%;
        color: var(--darkBlue);
        background-color: var(--white);
        font-weight: 900;
        transition: all 0.4s;
    }
    .swiper-button-next {
        right: var(--swiper-navigation-top-offset, 2px);
    }
    .swiper-button-prev {
        left: var(--swiper-navigation-top-offset, 2px);
    }
    .swiper-slide {
        border-bottom: none;
    }
}

.mySwiperBottom {
    height: 35%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiperBottom .swiper-slide {
    width: 35%;
    height: 100%;
    opacity: 0.4;
}

.mySwiperBottom .swiper-slide-thumb-active {
    opacity: 1;
}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
}

@media only screen and (min-width: 426px) and (max-width: 769px) {
    .catalog {
        &-item {
            &_img {
                img {
                    height: 350px;
                }
                &-a {
                    .overlay {
                        top: 0;
                        height: 350px;
                    }
                }
            }
        }
    }
}

@media only screen and (min-width: 200px) and (max-width: 426px) {
    .popup-header img {
        width: 18px;
        transition: all 0.4s;
    }
    .swiper {
        width: 100%;
        height: 90%;
        margin-left: auto;
        margin-right: auto;
    }

    .swiper-slide img {
        display: block;
        height: 340px;
        object-fit: cover;
    }
    .mySwiperBottom {
        display: none;
    }
}
</style>
