<template>
    <div class="production">
        <h2 class="main-title">
            <span> Деревянная мебель на заказ в Москве от Royal Wood</span>
        </h2>
        <p class="main-title-description">
            Что мы производим: двери, кухни, мебель для ванных комнат, шкафы,
            гардеробные, деревянные лестницы, нестандартные изделия
        </p>

        <div class="production-center">
            <div class="production-items">
                <div
                    v-for="item of items"
                    :key="item.title"
                    class="production-item"
                >
                    <div class="production-item_img">
                        <NuxtLink class="production-item_img-a" :to="item.a">
                            <nuxt-img
                                :src="`main/${item.img}`"
                                :alt="item.img"
                            />
                            <div class="overlay">
                                <div class="overlay-btn">
                                    <span class="underline">Подробнее</span>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="production-item_flex">
                        <NuxtLink :to="item.a">
                            <h3 class="production-item_title">
                                {{ item.title }}
                            </h3>
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="production-view-all">
                <NuxtLink to="/catalog" class="production-view-all_a">
                    <span class="underline">Посмотреть весь каталог</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const items = [
    {
        title: "Интерьеры из дерева ",
        a: "/catalog/interiors",
        img: "interiors.jpg",
    },
    {
        title: " Кухни",
        a: "/catalog/kitchens",
        img: "kitchens.jpg",
    },

    {
        title: "Шкафы ",
        a: "/catalog/wardrobes",
        img: "wardrobes.jpg",
    },
    {
        title: " Деревянные лестницы",
        a: "/catalog/wooden-stairs",
        img: "stairs.jpg",
    },
    {
        title: " Двери",
        a: "/catalog/doors",
        img: "doors.jpg",
    },
    {
        title: "Другие изделия",
        a: "/catalog/other-products",
        img: "other-products.jpg",
    },
];
</script>

<style lang="scss">
.production {
    display: flex;
    flex-direction: column;
    &-center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &-items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 40px;
    }
    &-item {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        border-bottom: 2px solid var(--lightOrange);
        box-shadow: 0 5px 8.2px 1.8px rgb(0 0 0 / 6%);
        img {
            display: block;
            width: 100%;

            object-fit: cover;
        }
        img:hover {
            cursor: pointer;
        }
        &_img {
            &-a {
                position: relative;

                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 685px;
                    background-color: rgba(58, 56, 56, 0.6);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: 0.5s;
                }
                .overlay-btn {
                    opacity: 1;
                    position: absolute;
                    -webkit-box-align: center;
                    -ms-flex-align: center;
                    align-items: center;
                    cursor: pointer;
                    padding: 14px 15px;
                    color: var(--white);
                    border: 1px solid var(--white);
                    .underline::after {
                        background: var(--white);
                    }
                    a {
                        color: var(--white);
                    }
                }
            }
            &-a:hover .overlay {
                opacity: 1;
            }
        }

        &_flex {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &_title {
            margin: 20px;
        }
        &_a {
            padding: 10px 15px;
            border: 2px solid var(--lightOrange);
            border-radius: 10px;
            margin-right: 20px;
        }
    }
    &-item:nth-child(1) {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
        img {
            width: 790px;
            height: 685px;
        }
    }
    &-item:nth-child(2) {
        img {
            width: 390px;
            height: 300px;
        }
        .overlay {
            height: 300px;
        }
    }
    &-item:nth-child(3) {
        img {
            width: 390px;
            height: 300px;
        }
        .overlay {
            height: 300px;
        }
    }
    &-item:nth-child(4) {
        grid-column: 1 / span 1;
        img {
            width: 390px;
            height: 300px;
        }
        .overlay {
            height: 300px;
        }
    }
    &-item:nth-child(5) {
        grid-column: 1 / span 1;
        img {
            width: 390px;
            height: 300px;
        }
        .overlay {
            height: 300px;
        }
    }
    &-item:nth-child(6) {
        grid-column: 2 / span 2;
        grid-row: 3 / span 2;
        img {
            width: 790px;
            height: 685px;
        }
    }

    &-view-all {
        margin: 40px 0;
        &_a {
            padding: 15px 30px;
            border: 2px solid var(--lightOrange);
            border-radius: 10px;
            font-size: 25px;
        }
    }
}
.main-btn-flex {
    display: flex;
    align-items: center;
}

@media (max-width: 769px) {
    .production {
        &-item:nth-child(1) img {
            width: 500px;
            height: 550px;
        }
        &-item:nth-child(2) {
            img {
                height: 225px;
            }
            .overlay {
                height: 225px;
            }
        }
        &-item:nth-child(3) {
            img {
                height: 225px;
            }
            .overlay {
                height: 225px;
            }
        }
        &-item:nth-child(4) {
            img {
                height: 225px;
            }
            .overlay {
                height: 225px;
            }
        }
        &-item:nth-child(5) {
            img {
                height: 225px;
            }
            .overlay {
                height: 225px;
            }
        }
        &-item:nth-child(6) img {
            width: 500px;
            height: 550px;
        }
        &-item {
            &_img {
                &-a {
                    .overlay {
                        height: 550px;
                    }
                }
            }
        }
    }
}

@media (max-width: 426px) {
    .production {
        &-items {
            grid-template-columns: repeat(1, 1fr);
        }
        &-view-all {
            &_a {
                font-size: 19px;
            }
        }
        &-item:nth-child(1) {
            grid-column: 1 / span 1;
            grid-row: 1 / span 1;
            img {
                width: 390px;
                height: 300px;
            }
            .overlay {
                height: 300px;
            }
        }
        &-item:nth-child(2) {
            img {
                width: 390px;
                height: 300px;
            }
            .overlay {
                height: 300px;
            }
        }
        &-item:nth-child(3) {
            img {
                width: 390px;
                height: 300px;
            }
            .overlay {
                height: 300px;
            }
        }
        &-item:nth-child(4) {
            grid-column: 1 / span 1;
            img {
                width: 390px;
                height: 300px;
            }
            .overlay {
                height: 300px;
            }
        }
        &-item:nth-child(5) {
            grid-column: 1 / span 1;
            img {
                width: 390px;
                height: 300px;
            }
            .overlay {
                height: 300px;
            }
        }
        &-item:nth-child(6) {
            grid-column: 1 / span 1;
            grid-row: 3 / span 2;
            img {
                width: 390px;
                height: 300px;
            }
            .overlay {
                height: 300px;
            }
        }
    }
}
</style>
