<template>
    <div class="mobile-menu" :class="{ hidden: !showNavbar }">
        <div class="mobile-menu-logo">
            <NuxtLink to="/" class="mobile-menu-logo-img">
                <nuxt-img src="header-logo-fix.png" alt="header-logo-mobile" />
            </NuxtLink>
        </div>
        <div
            :class="{ burgerActive: isActive }"
            class="mobile-menu-burger"
            @click.prevent="(isActive = !isActive), openBodyMobileMenu()"
        >
            <span></span>
        </div>
        <nav class="navbar-burger-menu">
            <ul class="navbar-burger-menu-ul">
                <li
                    v-for="link in links"
                    :key="link.name"
                    class="navbar-burger-menu-li"
                >
                    <NuxtLink
                        exact
                        no-prefetch
                        active-class="active"
                        :to="link.path"
                        ><span class="navbar-burger-menu-span underline">
                            {{ link.name }}
                        </span></NuxtLink
                    >
                </li>
            </ul>

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
                            <span class="underline">+7 (495) 995-34-73</span>
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
                            <span class="underline">info@royalwood.ru</span>
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
                            <span class="underline">Подпишись на нас</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
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
const OFFSET = 60;
export default {
    data() {
        return {
            isActive: false,
            showNavbar: true,
            lastScrollPosition: 0,
            scrollValue: 0,
        };
    },
    mounted() {
        this.lastScrollPosition = window.pageYOffset;
        window.addEventListener("scroll", this.onScroll);
        const viewportMeta = document.createElement("meta");
        viewportMeta.name = "viewport";
        viewportMeta.content = "width=device-width, initial-scale=1";
        document.head.appendChild(viewportMeta);
    },

    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        openBodyMobileMenu() {
            document
                .querySelector(".navbar-burger-menu")
                .classList.toggle("navbar-burger-menu-active");
        },
        onScroll() {
            if (window.pageYOffset < 0) {
                return;
            }
            if (
                Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET
            ) {
                return;
            }
            this.showNavbar = window.pageYOffset < this.lastScrollPosition;
            this.lastScrollPosition = window.pageYOffset;
        },
    },
};
</script>

<style lang="scss">
.mobile-menu.hidden {
    transform: translate3d(0, -100vh, 0);
}

@media (max-width: 900px) {
    .message {
        font-size: 7vw;
    }

    .arrow {
        width: 10vw;
        height: 10vw;
    }
}

@media (max-width: 600px) {
    .message {
        width: 90vw;
        font-size: 10vw;
    }

    .arrow {
        width: 15vw;
        height: 15vw;
    }
}

.mobile-menu {
    display: none;
}
.hide {
    transform: translateY(-150px);
}

@media (max-width: 769px) {
    .mobile-menu {
        display: flex;
        align-items: center;
        position: fixed;
        z-index: 20;
        background-color: var(--lightOrange);
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        border-bottom: 2px solid var(--brown);
        transition: all 0.2s;

        &-logo {
            margin-left: 25px;
            z-index: 20;
            img {
                width: 200px;
            }
        }
        &-burger {
            z-index: 20;
            display: block;
            width: 30px;
            height: 20px;
            cursor: pointer;
            position: absolute;
            right: 5%;
            top: 38%;
            border-radius: 20px;
        }
    }
    .mobile-menu-burger span,
    .mobile-menu-burger::before,
    .mobile-menu-burger::after {
        position: absolute;
        height: 15%;
        width: 100%;
        transition: all 0.3s ease 0s;
        background-color: var(--brown);
    }
    .mobile-menu-burger::before,
    .mobile-menu-burger::after {
        content: "";
    }
    .mobile-menu-burger::before {
        top: 0;
    }
    .mobile-menu-burger::after {
        bottom: 0;
    }
    .mobile-menu-burger span {
        width: 60%;
        top: 50%;
        transform: scale(1) translate(0px, -50%);
    }

    .burgerActive span {
        transform: scale(0) translate(0px, -50%);
    }
    .burgerActive::before {
        top: 50%;
        transform: rotate(-45deg) translate(0px, -50%);
    }
    .burgerActive::after {
        bottom: 50%;
        transform: rotate(45deg) translate(0px, 50%);
    }
    .navbar-burger-menu {
        display: flex;
        flex-direction: column;
        position: fixed;
        margin-top: 70px;
        padding: 10px;
        z-index: 10;
        top: 0;
        left: -100%;
        background-color: var(--lightOrange);
        width: 40%;
        height: 100%;
        overflow: auto;
        transition: left 0.3s ease 0s;
        border-right: 2px solid var(--brown);
        &-ul {
            display: flex;
            flex-direction: column;
            margin-top: 15px;
            margin-left: 15px;
            margin-bottom: 100px;
        }
        li {
            font-size: 20px;
            margin-bottom: 20px;
        }

        &-active {
            left: 0;
        }
    }
}

@media (max-width: 426px) {
    .mobile-menu {
        height: 55px;
        &-logo {
            img {
                width: 170px;
            }
        }
        &-burger {
            top: 30%;
        }
    }
    .navbar-burger-menu {
        width: 100%;
        margin-top: 55px;
    }
}
</style>
