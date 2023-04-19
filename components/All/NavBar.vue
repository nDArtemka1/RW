<template>
    <div>
        <div class="navbar">
            <div class="navbar-flex container">
                <NuxtLink to="/" class="navbar-logo">
                    <nuxt-img src="header-logo.png" alt="header-logo" />
                </NuxtLink>

                <nav class="navbar-menu">
                    <ul class="navbar-menu-ul">
                        <li class="navbar-menu-li">
                            <NuxtLink
                                exact
                                no-prefetch
                                active-class="active"
                                to="/"
                                ><span class="navbar-menu-span underline">
                                    Главная
                                </span></NuxtLink
                            >
                        </li>
                        <li class="navbar-menu-li">
                            <NuxtLink
                                exact
                                no-prefetch
                                active-class="active"
                                to="/catalog"
                                ><div class="underline">Каталог</div>
                                <div class="navbar-menu-arrow">
                                    <font-awesome-icon
                                        :icon="['fas', 'angle-down']"
                                    />
                                </div>
                            </NuxtLink>
                            <ul class="submenu">
                                <li>
                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        to="/catalog/classic"
                                        class="submenu-underline"
                                    >
                                        <span>
                                            Мебель в классическом исполнении
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        to="/catalog/classic/kitchens"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Кухни
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        to="/catalog/classic/doors"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Двери
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        to="/catalog/classic/wardrobes"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Шкафы
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        active-class="active"
                                        to="/catalog/classic/dressing-rooms"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Гардеробные
                                        </span>
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        active-class="active"
                                        to="/catalog/modern"
                                        class="submenu-underline"
                                    >
                                        <span>
                                            Мебель в современном исполнении
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        to="/catalog/modern/kitchens"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Кухни
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        to="/catalog/modern/doors"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Двери
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        to="/catalog/modern/wardrobes"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Шкафы
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        active-class="active"
                                        to="/catalog/modern/dressing-rooms"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Гардеробные
                                        </span>
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        active-class="active"
                                        to="/catalog/radiators"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Мебель для ванной
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        active-class="active"
                                        to="/catalog/furniture-for-the-nursery"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Мебель для детской
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        active-class="active"
                                        to="/catalog/interiors"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Мебель для интерьера
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        active-class="active"
                                        to="/catalog/wooden-stairs"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Лестницы
                                        </span>
                                    </NuxtLink>

                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        active-class="active"
                                        to="/catalog/radiators"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Стеновые панели
                                        </span>
                                    </NuxtLink>
                                </li>

                                <li>
                                    <NuxtLink
                                        exact
                                        no-prefetch
                                        active-class="active"
                                        to="/catalog/other-products"
                                        ><div class="navbar-menu-arrow-right">
                                            <font-awesome-icon
                                                :icon="['fas', 'angle-right']"
                                            />
                                        </div>
                                        <span
                                            class="navbar-sub-menu-span underline"
                                        >
                                            Другие изделия
                                        </span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </li>
                        <li class="navbar-menu-li">
                            <NuxtLink
                                exact
                                no-prefetch
                                active-class="active"
                                to="/materials"
                                ><span class="navbar-menu-span underline">
                                    Материалы
                                </span></NuxtLink
                            >
                        </li>
                        <li class="navbar-menu-li">
                            <NuxtLink
                                exact
                                no-prefetch
                                active-class="active"
                                to="/delivery"
                                ><span class="navbar-menu-span underline">
                                    Доставка и Оплата
                                </span></NuxtLink
                            >
                        </li>
                        <li class="navbar-menu-li">
                            <NuxtLink
                                exact
                                no-prefetch
                                active-class="active"
                                to="/contacts"
                                ><span class="navbar-menu-span underline">
                                    Контакты
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
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const links = ref([
    { name: "Главная", path: "/", addClassSubLink: "", icon: "none" },
    {
        name: "Каталог",
        path: "/catalog",
        addClassSubLink: "sub-link",
        icon: "angle-down",
        subLinks: [
            {
                title: "Мебель в классическом исполнении",
                path: "/catalog/classic",
                subLinks2: [
                    {
                        title: "Кухни",
                        path: "/catalog/classic",
                    },
                    {
                        title: "Двери",
                        path: "/catalog/modern",
                    },
                    {
                        title: "Шкафы",
                        path: "/catalog/bathroom-furniture",
                    },
                    {
                        title: "Гардеробные",
                        path: "/catalog/bathroom-furniture",
                    },
                ],
            },
            {
                title: "Мебель в современном исполнении",
                path: "/catalog/modern",
                subLinks2: [
                    {
                        title: "Кухни",
                        path: "/catalog/classic",
                    },
                    {
                        title: "Двери",
                        path: "/catalog/modern",
                    },
                    {
                        title: "Шкафы",
                        path: "/catalog/bathroom-furniture",
                    },
                    {
                        title: "Гардеробные",
                        path: "/catalog/bathroom-furniture",
                    },
                ],
            },
            {
                title: "Мебель для ванной комнаты",
                path: "/catalog/bathroom-furniture",
            },
            {
                title: "Мебель для детской",
                path: "/catalog/furniture-for-the-nursery",
            },
            {
                title: "Мебель для интерьера",
                path: "/catalog/interiors",
            },
            {
                title: "Гардеробные",
                path: "/catalog/dressing-rooms",
            },
            {
                title: "Лестницы",
                path: "/catalog/wooden-stairs",
            },
            {
                title: "Другие изделия",
                path: "/catalog/wall-panels",
            },
            {
                title: "Мебель в современном исполнении",
                path: "/catalog/other-products",
            },
        ],
    },
    { name: "Материалы", path: "/materials", addClassSubLink: "", icon: "" },
    {
        name: "Доставка и Оплата",
        path: "/delivery",
        addClassSubLink: "",
        icon: "",
    },
    { name: "Контакты", path: "/contacts", addClassSubLink: "", icon: "" },
]);
</script>

<style lang="scss">
.navbar-menu a {
    display: block;
    transition: 0.3s linear;
}

.navbar-menu-ul > li {
    display: inline-block;
    position: relative;
}
.navbar-menu-ul > li > a {
    padding: 0;
    display: flex;
}

.submenu {
    position: absolute;
    top: 30px;
    left: -300px;
    z-index: 5;
    border-right: 1px solid var(--black);
    border-left: 1px solid var(--black);
    border-bottom: 1px solid var(--black);
    visibility: hidden;
    opacity: 0;
    transform: translateY(10px);
    transition: 0.3s ease-in-out;
    border-radius: 0 0 5px 5px;
    background: var(--white);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 10px 0 25px 0;
}
.submenu-underline {
    position: relative;
    span {
        font-weight: bold;
    }
}
.submenu-underline::after {
    content: "";
    position: absolute;
    bottom: 0;
    display: block;
    height: 2px;
    width: 88%;
    background: var(--darkBlue);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
}
.submenu li {
    position: relative;
    width: 335px;
    a {
        display: flex;
    }
}
.submenu li:nth-child(3) {
    position: relative;
    width: 245px;
}
.submenu li:last-child {
    position: relative;
    width: 200px;
}
.submenu a {
    padding: 10px 20px;
}
.submenu .submenu {
    position: absolute;
    top: 0;
    left: 100%;
}
nav li:hover > .submenu {
    visibility: visible;
    opacity: 1;
    transform: translateY(0px);
}

.sub-menu {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.navbar {
    border-bottom: 2px solid var(--darkBlue);

    &-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 25px 0;
        margin-top: 1px;
    }
    &-logo {
        font-size: 27px;
        img {
            width: 170px;
            height: 110px;
        }
    }

    &-menu {
        z-index: 5;
        transition: all 0.3s;
        &-ul {
            display: flex;
            margin: 0 15px;
            transition: all 0.3s;

            .sub-link {
                padding-bottom: 30px;
                margin-bottom: -30px;
            }
        }
        &-li:not(last-child) {
            margin-right: 30px;
        }
        &-li {
            font-size: 17px;
            position: relative;
        }

        &-arrow {
            margin-left: 9px;
            width: 12px;
            svg {
                width: 15px;
                height: 15px;
            }
        }
        &-arrow-right {
            margin-right: 9px;
            display: flex;
            align-items: center;
            svg {
                width: 12px;
                height: 12px;
            }
        }

        &-span {
            display: flex;
            transition: 0.3s;
        }
    }

    &-social {
        &-flex {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }
        &-item {
            margin-bottom: 10px;
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
    &-icon-svg {
        width: 23px;
        height: 23px;
        margin-right: 20px;
    }
}
.sub-link {
    padding-bottom: 30px;
}
.sub-link a {
    display: flex;
    margin-top: 30px;
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

@media (max-width: 769px) {
    .navbar {
        display: none;
    }
}
</style>
