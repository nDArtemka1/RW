<template>
    <div class="navbar-fix" :class="{ hidden: !showNavbar }">
        <div class="navbar-fix-container">
            <div class="navbar-fix-flex">
                <NuxtLink to="/" class="navbar-fix-logo">
                    <nuxt-img src="header-logo-fix.png" alt="header-logo-fix" />
                </NuxtLink>

                <nav class="navbar-fix-menu">
                    <ul class="navbar-fix-menu-ul">
                        <li
                            v-for="link in links"
                            :key="link.name"
                            class="navbar-fix-menu-li"
                        >
                            <NuxtLink
                                exact
                                no-prefetch
                                active-class="active"
                                :to="link.path"
                                ><span class="navbar-fix-menu-span underline">
                                    {{ link.name }}
                                </span></NuxtLink
                            >
                        </li>
                    </ul>
                </nav>
                <Popup v-show="isVisible" @closePopup="closePopup"
                    ><div class="popup-form">
                        <h3 class="popup-form-title">
                            Задайте вопрос прямо сейчас!
                        </h3>
                        <p class="popup-form-description">
                            Консультация по всем вопросам - бесплатно!
                        </p>
                        <Form /></div
                ></Popup>
                <div class="navbar-fix-social">
                    <div class="navbar-fix-social-flex">
                        <div class="navbar-fix-btn">
                            <button
                                class="navbar-fix-btn-popup"
                                @click="showPopupInfo"
                            >
                                <span class="underline"> Заказать звонок</span>
                            </button>
                            <div class="navbar-fix-social-item">
                                <NuxtLink
                                    class="navbar-fix-social-svg"
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
                        </div>

                        <div class="navbar-fix-social-item">
                            <div class="navbar-fix-social-svg">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
import Popup from "~~/components/All/Popup.vue";
import Form from "~~/components/All/Form.vue";

const OFFSET = 60;

export default {
    components: {
        Popup,
        Form,
    },
    data() {
        return {
            ColorWhite: true,
            isVisible: false,
            scrolled: false,
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
    methods: {
        showPopupInfo() {
            this.isVisible = true;
        },
        closePopup() {
            this.isVisible = false;
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
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
};
</script>

<style lang="scss">
.navbar-fix.hidden {
    opacity: 1;
    top: 0;
}

.navbar-fix {
    opacity: 0;
    position: fixed;
    top: -100px;
    z-index: 40;
    width: 100%;
    border-bottom: 2px solid var(--brown);
    background-color: #ececec;
    transition: all 0.4s;
    &-container {
        margin: 0 auto;
        max-width: 1855px;
    }
    &-flex {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 20px 0;
    }
    &-logo {
        font-size: 27px;
        display: flex;
        align-items: center;
        img {
            width: 170px;
        }
    }
    &-menu {
        ul {
            display: flex;
        }
        &-li {
            font-size: 17px;
        }
        &-li:not(:last-child) {
            padding-right: 30px;
        }
    }
    &-social {
        &-flex {
            display: flex;
            align-items: center;
        }
        &-item {
            margin-left: 20px;
        }

        &-item:last-child {
            span {
                margin-left: 0;
            }
            svg {
                margin-right: 20px;
            }
        }
        &-svg {
            display: flex;
            align-items: center;
            span {
                margin-left: 20px;
            }
        }
    }
    &-svg {
        display: flex;
        align-items: center;
        svg {
            margin-right: 15px;
        }
    }
    &-btn {
        display: flex;
        align-items: center;
        &-popup {
            border: 1px solid var(--brown);
            background-color: var(--lightOrange);
            color: var(--black);
            border-radius: 5px;
            cursor: pointer;
            transition: 0.4s;
            padding: 10px 15px;
        }
    }
}
.underline {
    position: relative;
}
.underline::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    display: block;
    height: 2px;
    width: 0;
    background: var(--darkBlue);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
}
.underline:hover::after {
    width: 100%;
    left: 0;
}
.active {
    position: relative;
}
.active::after {
    content: "";
    position: absolute;
    bottom: -4px;
    display: block;
    height: 2px;
    width: 100%;
    background: var(--darkBlue);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
}

@media only screen and (min-width: 769px) and (max-width: 1226px) {
    .navbar-fix {
        &-logo {
            margin-right: 20px;
        }
        &-container {
            font-size: 15px;
        }
        &-menu {
            &-li {
                font-size: 15px;
            }
            &-li:not(:last-child) {
                padding-right: 20px;
            }
        }
        &-btn {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
        }
        &-social-item {
            margin-top: 15px;
            margin-left: 15px;
        }
    }
}

@media only screen and (min-width: 425px) and (max-width: 769px) {
    .navbar-fix {
        display: none;
    }
}

@media (max-width: 426px) {
    .navbar-fix {
        display: none;
    }
}
</style>
