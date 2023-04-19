<template class="container">
    <swiper
        :modules="[Navigation]"
        :spaceBetween="25"
        :navigation="true"
        class="mySwiperRealize"
        :breakpoints="{
            200: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            321: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            426: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1025: {
                slidesPerView: 4,
                spaceBetween: 25,
            },
        }"
    >
        <swiper-slide v-for="slide in itemData" :key="slide.id">
            <nuxt-img :src="`main/${slide.img}`" :alt="slide.img" />
            <p>{{ slide.description }}</p>
        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "swiper/css/grid";

import { FreeMode, Navigation } from "swiper";

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
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            FreeMode,
            Navigation,
        };
    },
};
</script>

<style lang="scss">
.mySwiperRealize {
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 400px;
        object-fit: cover;
    }
    .swiper-slide:hover {
        cursor: pointer;
    }
}
.swiper {
    width: 100%;
    height: 100%;
    padding: 0 40px;
}

.swiper,
swiper-container {
    padding-bottom: 20px;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    border-bottom: 2px solid var(--lightOrange);
    box-shadow: 0 5px 8.2px 1.8px rgb(0 0 0 / 6%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    p {
        margin: 15px 0;
    }
}

.swiper-pagination-bullet-active {
    background: var(--brown);
}

.swiper-button-next,
.swiper-button-prev {
    top: var(--swiper-navigation-top-offset, 44%);
    padding: 20px;
    border: 1px solid var(--brown);
    border-radius: 100%;
    color: var(--darkBlue);
    background-color: var(--white);
    font-weight: 900;
    transition: all 0.4s;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
    color: var(--darkBlue);
    background-color: var(--lightOrange);
}
.swiper-button-next:after {
    content: "\276f";
    font-size: 22px;
}
.swiper-button-prev:after {
    content: "\276E";
    font-size: 22px;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    bottom: var(--swiper-pagination-bottom, 8px);
    left: 0;
    top: var(--swiper-pagination-top, 20px);
    width: 100%;
}

.swiper-pagination-bullet-active {
    background: var(--brown);
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    bottom: var(--swiper-pagination-bottom, 8px);
    left: 0;
    top: var(--swiper-pagination-top, 20px);
    width: 100%;
}

.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
    position: relative;
    z-index: 5;
}
</style>
