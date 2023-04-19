<template>
    <div>
        <div class="container">
            <MainForm />
        </div>
        <footer class="footer">
            <div class="container">
                <div class="footer-top">
                    <nav class="footer-menu">
                        <ul class="footer-menu-ul">
                            <li
                                v-for="link in footerLinks"
                                :key="link.name"
                                class="footer-menu-li"
                            >
                                <NuxtLink
                                    exact
                                    no-prefetch
                                    active-class="active"
                                    :to="link.path"
                                    ><span class="footer-menu-span underline">
                                        {{ link.name }}
                                    </span></NuxtLink
                                >
                            </li>
                        </ul>
                    </nav>
                    <div id="header-logo" class="footer-logo">
                        <nuxt-img
                            src="main/header-logo.png"
                            alt="header-logo"
                            class="footer-item-img"
                        />
                    </div>
                    <div class="footer-social">
                        <div class="footer-social-title">Мы в соцсетях:</div>
                        <div class="footer-social-svg">
                            <NuxtLink
                                class="footer-svg"
                                to="https://api.whatsapp.com/send?phone=79637821473"
                                target="_blank"
                                ><nuxt-img
                                    src="whatsapp-icon.svg"
                                    alt="whatsapp-icon"
                                    class="footer-icon-svg"
                                />
                            </NuxtLink>
                            <NuxtLink
                                to="https://vk.com/club211531768"
                                target="_blank"
                                ><nuxt-img
                                    src="vk-icon.svg"
                                    alt="vk-icon"
                                    class="footer-icon-svg"
                            /></NuxtLink>

                            <NuxtLink
                                to="https://t.me/royal_wood_mebel"
                                target="_blank"
                                ><nuxt-img
                                    src="telegram-icon.svg"
                                    alt="telegram-icon"
                                    class="footer-icon-svg"
                            /></NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-copyriting">
                        <span>© 2023 все права защищены</span>
                    </div>
                    <div class="footer-bottom-privacy">
                        <NuxtLink to="/privacity" target="_blank"
                            ><span class="underline">
                                Политика конфиденциальности
                            </span></NuxtLink
                        >
                    </div>
                    <div class="footer-bottom-development">
                        <NuxtLink to="mailto:online@webkas.ru">
                            <nuxt-img
                                src="webkass-logo.png"
                                alt="webkass-logo"
                            />
                            <br />
                            Создание Сайтов и Маркетинг
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref } from "vue";
import MainForm from "~~/components/Main/MainForm.vue";
const footerLinks = ref([
    { name: "Главная", path: "/" },
    { name: "Каталог", path: "/catalog" },
    { name: "Материалы", path: "/materials" },
    { name: "Доставка и Оплата", path: "/delivery" },
    { name: "Контакты", path: "/contacts" },
]);
</script>

<style lang="scss">
footer {
    flex-shrink: 0;
}
.footer {
    background-color: var(--lightOrange);
    padding: 40px 0;

    &-top {
        display: flex;
        justify-content: space-between;
    }
    &-menu {
        &-li {
            margin-bottom: 20px;
        }
    }
    &-logo {
        font-size: 40px;
        color: var(--brown);
        animation: header-logo 5s infinite linear;
        backface-visibility: hidden;
        img {
            animation: header-logo 5s infinite linear;
            backface-visibility: hidden;
        }
    }
    &-social {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        &-title {
            margin-bottom: 20px;
        }
        &-svg {
            a:not(:last-child) {
                margin-right: 20px;
            }
        }
    }
    &-bottom {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        &-development {
            text-align: center;
        }
    }
    &-icon-svg {
        width: 23px;
        height: 23px;
    }
}
@keyframes header-logo {
    0%,
    20% {
        transform: scale(1, 1);
        animation-timing-function: linear;
    }
    50%,
    50% {
        transform: scale(0, 1);
        animation-timing-function: linear;
    }
    85%,
    85% {
        transform: scale(1, 1);
    }
    100%,
    100% {
        transform: scale(1, 1);
    }
}

@media (max-width: 426px) {
    .footer {
        &-menu {
            display: none;
        }
        &-social {
            display: none;
        }
        &-top {
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
        }
        &-bottom {
            display: flex;
            flex-direction: column;
            align-items: center;
            &-privacy {
                margin: 20px 0;
            }
            &-development {
                img {
                    width: 110px;
                }
            }
        }
    }
}
</style>
