<template>
    <div class="container"></div>
    <div><slot /></div>

    <Footer />
    <WatsAppBtn />
    <ScrollToTop />
</template>

<script setup>
import MainMobileMenu from "~~/components/Main/MainMobileMenu.vue";
import NavBar from "~~/components/All/NavBar.vue";
import NavBarFix from "~~/components/All/NavBarFix.vue";
import Footer from "~~/components/All/Footer.vue";
import WatsAppBtn from "~~/components/All/WatsAppBtn.vue";
import ScrollToTop from "~~/components/All/ScrollToTop.vue";
</script>

<script>
export default {
    watch: {
        $route() {
            location.reload();
        },
    },
    mounted() {
        if (process.client && window) {
            window.history.scrollRestoration = "auto";
        }
    },
};
</script>

<style lang="scss" scoped>
.body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    flex-grow: 1;
}
@media only screen and (min-width: 426px) and (max-width: 769px) {
    .body {
        margin-top: 70px;
    }
}
</style>
