<template>
    <div>
        <MainMobileMenu />
        <Header />
        <MainInfo />
        <MainBlockImg
            :images="images"
            :style="{
                background:
                    images.background + `, url(images/main/${images.bgImg1})`,
                height: '400px',
                backgroundAttachment: 'fixed',
                display: 'flex',
                justifyContent: 'center',
                color: '#ffffff',
                alignItems: 'center',
                position: 'relative',
            }"
        />
        <div class="container">
            <MainProduction />
            <MainAdvantages />
            <MainCalc />
        </div>
        <MainRealize />
        <div class="container">
            <MainFounder />
        </div>
        <MainBlockImg
            :images="images"
            :style="{
                background:
                    images.background + `, url(images/main/${images.bgImg2})`,
                padding: '100px 0',
                backgroundAttachment: 'fixed',
                color: '#ffffff',
            }"
            ><div class="container main-calc-fl-end">
                <MainCalc class="color-white" />
            </div>
        </MainBlockImg>

        <div class="container">
            <MainProjects />
            <MainStageSale />
        </div>
        <MainBlockImg
            :images="images"
            :style="{
                background:
                    images.background + `, url(images/main/${images.bgImg3})`,
                height: '330px',
                backgroundAttachment: 'fixed',
                display: 'flex',
                justifyContent: 'center',
                color: '#ffffff',
                alignItems: 'center',
                position: 'relative',
            }"
        />
        <WatsAppBtn />
        <ScrollToTop />
    </div>
</template>

<script setup>
import MainMobileMenu from "~~/components/Main/MainMobileMenu.vue";
import Header from "~~/components/Main/Header.vue";
import MainInfo from "~~/components/Main/MainInfo.vue";
import MainBlockImg from "~~/components/Main/MainBlockImg.vue";
import MainProduction from "~~/components/Main/MainProduction.vue";
import MainAdvantages from "~~/components/Main/MainAdvantages.vue";
import MainCalc from "~~/components/Main/MainCalc.vue";
import MainFounder from "~~/components/Main/MainFounder.vue";
import MainProjects from "~~/components/Main/MainProjects.vue";
import MainStageSale from "~~/components/Main/MainStageSale.vue";
import WatsAppBtn from "~~/components/All/WatsAppBtn.vue";
import ScrollToTop from "~~/components/All/ScrollToTop.vue";

useHead({
    title: "Royal-Wood | Деревянная мебель на заказ в Москве | Изготовление мебели по размерам из массива дерева под заказ",
});
definePageMeta({
    layout: "header-empty",
});
</script>
<script>
export default {
    data() {
        return {
            images: {
                bgImg1: "main-block-img.jpg",
                bgImg2: "main-block-img1.jpg",
                bgImg3: "main-block-img2.jpg",
                background:
                    "linear-gradient(rgba(54, 52, 45, 0.7), rgba(54, 52, 45, 0.57))",
            },
        };
    },
};
</script>

<style lang="scss">
.color-white {
    .main-calc {
        margin-top: 0;

        &-title {
            color: var(--white);
        }
        &-btn {
            border: 2px solid var(--white);
            color: var(--brown);
            background: var(--white);
            .underline:after {
                background: var(--brown);
            }
        }
    }
}

.parallax .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
}
</style>
