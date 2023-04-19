<template>
    <div class="catalog-categories-item">
        <div class="catalog-categories-item_img">
            <NuxtLink
                :to="categoryData.categoryPath + categoryData.categoryLink"
                ><div class="catalog-categories-item_img-a">
                    <nuxt-img
                        :src="categoryData.categoryPath + categoryData.img"
                        :alt="categoryData.title"
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
            <NuxtLink
                :to="categoryData.categoryPath + categoryData.categoryLink"
            >
                <h3 class="catalog-categories-item_title">
                    {{ categoryData.title }}
                </h3>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categoryData: {
            type: Object,
            default() {
                return {};
            },
        },
    },
};
</script>

<style lang="scss">
.catalog {
    &-categories {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        &-item {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            padding: 15px;
            border: 2px solid var(--lightOrange);
            box-shadow: 0 5px 8.2px 1.8px rgb(0 0 0 / 6%);
            margin-bottom: 20px;
            &_img {
                width: 100%;
                img {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                }
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
                text-align: center;
                &-p {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
            }
            &_title {
                margin: 20px 0;
            }
        }
    }
}

@media only screen and (min-width: 426px) and (max-width: 769px) {
    .catalog {
        &-categories {
            &-item {
                img {
                    height: 350px;
                    object-fit: cover;
                }
                &_img {
                    &-a {
                        position: relative;
                        .overlay {
                            height: 350px;
                        }
                    }
                }
            }
        }
    }
}

@media only screen and (min-width: 200px) and (max-width: 426px) {
    .catalog {
        padding-top: 40px;
        &-categories {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
            &-item {
                margin-bottom: 0;
                &_title {
                    margin: 20px 0 5px 0;
                }
            }
        }
    }
}
</style>
