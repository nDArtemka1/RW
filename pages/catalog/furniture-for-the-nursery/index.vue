<template>
    <main class="catalog container">
        <h1 class="main-title">
            <span>Классическая деревянная мебель от Royal Wood</span>
        </h1>

        <div class="catalog-categories-items">
            <div
                v-for="item of catalogItems"
                :key="item.title"
                class="catalog-categories-item"
            >
                <div class="catalog-categories-item_img">
                    <NuxtLink :to="/catalog/ + item.categoryLink"
                        ><div class="catalog-categories-item_img-a">
                            <nuxt-img
                                :src="`catalog/${item.img}`"
                                :alt="item.img"
                            />
                            <div class="overlay">
                                <div class="overlay-btn">
                                    <span class="underline">Подробнее</span>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
                <div class="catalog-categories-item_flex">
                    <NuxtLink :to="/catalog/ + item.categoryLink">
                        <h3 class="catalog-categories-item_title">
                            {{ item.title }}
                        </h3>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <h2 class="main-title">
            <span>Другие разделы</span>
        </h2>

        <div class="catalog-categories-items">
            <div
                v-for="item of OtherCatalogItems"
                :key="item.title"
                class="catalog-categories-item"
            >
                <div class="catalog-categories-item_img">
                    <NuxtLink :to="/catalog/ + item.categoryLink"
                        ><div class="catalog-categories-item_img-a">
                            <nuxt-img
                                :src="`catalog/${item.img}`"
                                :alt="item.img"
                            />
                            <div class="overlay">
                                <div class="overlay-btn">
                                    <span class="underline">Подробнее</span>
                                </div>
                            </div>
                        </div>
                    </NuxtLink>
                </div>
                <div class="catalog-categories-item_flex">
                    <NuxtLink :to="/catalog/ + item.categoryLink">
                        <h3 class="catalog-categories-item_title">
                            {{ item.title }}
                        </h3>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
useHead({
    title: "Royal-Wood | Каталог классической деревянной мебели на заказ в Москве | Изготовление мебели по размерам из массива дерева под заказ",
});

const catalogItems = [
    {
        title: "Кухни",
        categoryLink: "kitchens/classic",
        img: "kitchens.jpg",
    },
    {
        title: "Шкафы ",
        categoryLink: "wardrobes/classic",
        img: "wardrobes.jpg",
    },

    {
        title: "Двери",
        categoryLink: "doors/classic",
        img: "doors.jpg",
    },
];

const OtherCatalogItems = [
    {
        title: "Современная мебель",
        categoryLink: "modern",
        img: "furniture.jpg",
    },
    {
        title: "Дубовая мебель",
        categoryLink: "oak-furniture",
        img: "furniture.jpg",
    },
    {
        title: "Столы",
        categoryLink: "tables",
        img: "tables.jpg",
    },
    {
        title: "Деревянные лестницы",
        categoryLink: "wooden-stairs",
        img: "stairs.jpg",
    },
    {
        title: "Камины",
        categoryLink: "fireplaces",
        img: "fireplaces.jpg",
    },
    {
        title: "Экраны радиаторов",
        categoryLink: "radiators",
        img: "radiators.jpg",
    },
    {
        title: "Интерьеры из дерева ",
        categoryLink: "interiors",
        img: "interiors.jpg",
    },
    {
        title: "Другие изделия",
        categoryLink: "other-products",
        img: "other-products.jpg",
    },
];
</script>

<style lang="scss" scoped>
.catalog {
    &-categories-items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
    &-item {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        border-bottom: 2px solid var(--lightOrange);
        box-shadow: 0 5px 8.2px 1.8px rgb(0 0 0 / 6%);
        margin-bottom: 20px;
        img {
            height: 400px;
            object-fit: cover;
        }
        &_img {
            &-a {
                position: relative;
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 400px;
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
}
.main-title-description {
    font-weight: 500;
    margin-bottom: 0;
}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
}

@media only screen and (min-width: 426px) and (max-width: 769px) {
    .catalog {
        &-categories-items {
            grid-template-columns: repeat(2, 1fr);
        }
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
    .catalog {
        padding-top: 40px;
        &-categories-items {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &-item {
            width: 100%;
        }
        &-item:last-child {
            margin-left: 0;
        }
    }
}
</style>
