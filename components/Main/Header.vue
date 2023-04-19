<template>
    <header class="header">
        <div class="color-white">
            <div class="navbar">
                <div class="navbar-flex container">
                    <NuxtLink to="/" class="navbar-logo">
                        <nuxt-img
                            src="header-logo-white.png"
                            alt="header-logo-white"
                        />
                    </NuxtLink>

                    <nav class="navbar-menu">
                        <ul class="navbar-menu-ul">
                            <li
                                v-for="link in links"
                                :key="link.name"
                                class="navbar-menu-li"
                            >
                                <NuxtLink
                                    exact
                                    no-prefetch
                                    active-class="active"
                                    :to="link.path"
                                    ><span class="navbar-menu-span underline">
                                        {{ link.name }}
                                    </span></NuxtLink
                                >
                            </li>
                        </ul>
                    </nav>

                    <div class="navbar-social">
                        <div class="navbar-social-flex container">
                            <div class="navbar-social-item">
                                <NuxtLink
                                    class="navbar-social-svg"
                                    to="tel:+7 (495) 995-34-73"
                                    ><nuxt-img
                                        src="phone-icon.svg"
                                        alt="phone-icon"
                                        class="navbar-icon-svg"
                                    />
                                    <span class="underline"
                                        >+7 (495) 995-34-73</span
                                    >
                                </NuxtLink>
                            </div>
                            <div class="navbar-social-item">
                                <NuxtLink
                                    class="navbar-social-svg"
                                    to="mailto:info@royalwood.ru"
                                    ><nuxt-img
                                        src="mail-icon.svg"
                                        alt="mail-icon"
                                        class="navbar-icon-svg"
                                    />
                                    <span class="underline"
                                        >info@royalwood.ru</span
                                    >
                                </NuxtLink>
                            </div>
                            <div class="navbar-social-item">
                                <div class="navbar-social-svg">
                                    <NuxtLink
                                        to="https://vk.com/club211531768"
                                        target="_blank"
                                        ><nuxt-img
                                            src="vk-icon.svg"
                                            alt="vk-icon"
                                            class="navbar-icon-svg"
                                    /></NuxtLink>

                                    <NuxtLink
                                        to="https://t.me/royal_wood_mebel"
                                        target="_blank"
                                        ><nuxt-img
                                            src="telegram-icon.svg"
                                            alt="telegram-icon"
                                            class="navbar-icon-svg"
                                    /></NuxtLink>
                                    <span class="underline"
                                        >Подпишись на нас</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NavBarFix />
        <HeaderPopup class="color-white" />
    </header>
</template>

<script setup>
import NavBarFix from "~~/components/All/NavBarFix.vue";
import HeaderPopup from "~~/components/Main/HeaderPopup.vue";

import { ref } from "vue";

const links = ref([
    { name: "Главная", path: "/" },
    { name: "Каталог", path: "/catalog" },
    { name: "Материалы", path: "/materials" },
    { name: "Доставка и Оплата", path: "/delivery" },
    { name: "Контакты", path: "/contacts" },
]);
</script>

<script>
export default {
    data() {
        return {
            headLogos: [
                {
                    headerLogo: "header-logo-white.png",
                    alt: "header-logo-white",
                },
                {
                    otherHeaderLogo: "header-logo.png",
                    otherAlt: "header-logo",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
header {
    position: relative;
}
.header {
    background: linear-gradient(rgba(54, 52, 45, 0.7), rgba(54, 52, 45, 0.57)),
        url("/images/main/header-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
}

.filtered {
    position: relative;
}
.filtered::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    background-color: rgba(54, 52, 45, 0.53);
}
.color-white {
    .navbar {
        border-bottom: 2px solid var(--white);
        &-icon-svg {
            filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(264deg)
                brightness(102%) contrast(105%);
        }
    }
    a {
        color: var(--white);
    }

    .underline:after {
        background: var(--white);
    }
    .navbar-social {
        border-color: var(--white);
        &-svg {
            span {
                color: var(--white);
            }
        }
    }
    .active::after {
        background: var(--white);
    }
}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
    .navbar {
        padding: 0 20px;
    }
}

@media (max-width: 1025px) {
    .header {
        background: linear-gradient(
                rgba(54, 52, 45, 0.7),
                rgba(54, 52, 45, 0.57)
            ),
            url("/images/main/header-bg-1024.jpg");
        background-size: cover;
        width: 100%;
    }
}

@media (max-width: 769px) {
    .header {
        background: linear-gradient(
                rgba(54, 52, 45, 0.7),
                rgba(54, 52, 45, 0.57)
            ),
            url("/images/main/header-bg-768.jpg");
        background-size: cover;
        width: 100%;
    }
}

@media (max-width: 426px) {
    .header {
        background: linear-gradient(
                rgba(54, 52, 45, 0.7),
                rgba(54, 52, 45, 0.57)
            ),
            url("/images/main/header-bg-425.jpg");
        background-size: cover;
        width: 100%;
    }
}
</style>
