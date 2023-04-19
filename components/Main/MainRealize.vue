<template>
    <div class="realize">
        <div class="container">
            <div class="realize-flex">
                <h3 class="main-title">
                    <span> Визуализация / реализация</span>
                </h3>
                <p class="realize-flex-description">
                    Предоставляем возможность сравнить визуальный образ,
                    согласованный с заказчиком, и фото после завершения
                    строительного процесса.
                </p>
            </div>
        </div>
        <MainSwiper :itemData="sliderItems" />
    </div>
</template>

<script>
import MainSwiper from "~~/components/Main/MainSwiper.vue";

export default {
    components: {
        MainSwiper,
    },
    data() {
        return {
            sliderItems: [
                {
                    id: "1",
                    img: "1viz.jpg",
                    description: "Визуализация",
                },
                {
                    id: "1-1",
                    img: "1foto.jpg",
                    description: "Реализация",
                },
                {
                    id: "2",
                    img: "2v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "2-1",
                    img: "2f.jpg",
                    description: "Реализация",
                },
                {
                    id: "3",
                    img: "3v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "3-1",
                    img: "3f.jpg",
                    description: "Реализация",
                },
                {
                    id: "4",
                    img: "4v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "4-1",
                    img: "4f.jpg",
                    description: "Реализация",
                },
                {
                    id: "5",
                    img: "5v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "5-1",
                    img: "5f.jpg",
                    description: "Реализация",
                },

                {
                    id: "7",
                    img: "7v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "7-1",
                    img: "7f.jpg",
                    description: "Реализация",
                },
                {
                    id: "11",
                    img: "11v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "11-1",
                    img: "11f.jpg",
                    description: "Реализация",
                },
                {
                    id: "12",
                    img: "12v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "12-1",
                    img: "12f.jpg",
                    description: "Реализация",
                },
                {
                    id: "13",
                    img: "13v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "13-1",
                    img: "13f.jpg",
                    description: "Реализация",
                },
                {
                    id: "14",
                    img: "14v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "14-1",
                    img: "14f.jpg",
                    description: "Реализация",
                },
                {
                    id: "15",
                    img: "15v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "15-1",
                    img: "15f.jpg",
                    description: "Реализация",
                },
                {
                    id: "16",
                    img: "16v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "16-1",
                    img: "16f.jpg",
                    description: "Реализация",
                },
                {
                    id: "17",
                    img: "17v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "17-1",
                    img: "17f.jpg",
                    description: "Реализация",
                },
                {
                    id: "18",
                    img: "18v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "18-1",
                    img: "18f.jpg",
                    description: "Реализация",
                },
                {
                    id: "19",
                    img: "19v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "19-1",
                    img: "19f.jpg",
                    description: "Реализация",
                },
                {
                    id: "20",
                    img: "20v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "20-1",
                    img: "20f.jpg",
                    description: "Реализация",
                },
                {
                    id: "21",
                    img: "21v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "21-1",
                    img: "21f.jpg",
                    description: "Реализация",
                },
                {
                    id: "24",
                    img: "24v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "24-1",
                    img: "24f.jpg",
                    description: "Реализация",
                },
                {
                    id: "25",
                    img: "25v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "25-1",
                    img: "25f.jpg",
                    description: "Реализация",
                },
                {
                    id: "26",
                    img: "26v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "26-1",
                    img: "26f.jpg",
                    description: "Реализация",
                },
                {
                    id: "27",
                    img: "27v.jpg",
                    description: "Визуализация",
                },
                {
                    id: "27-1",
                    img: "27f.jpg",
                    description: "Реализация",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.main-realize-title {
    font-size: 35px;
    margin: 25px 0;
}
.main-realize-description {
    font-size: 23px;
    margin-bottom: 20px;
    text-align: center;
}
.realize {
    &-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
            margin-right: 55px;
            padding: 0 130px;
        }
        &-description {
            width: 75%;
            margin: 40px 0;
            font-size: 20px;
        }
    }
}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
    .realize {
        &-flex {
            &-description {
                width: 100%;
            }
        }
    }
}

@media only screen and (min-width: 426px) and (max-width: 769px) {
    .realize {
        &-flex {
            flex-wrap: wrap;
            h3 {
                margin-right: 0;
            }
            &-description {
                width: 100%;
                text-align: center;
                margin: 0 0 40px 0;
            }
        }
    }
}

@media only screen and (min-width: 200px) and (max-width: 426px) {
    .realize {
        &-flex {
            flex-direction: column;
            h3 {
                margin-right: 0;
                padding: 0;
            }
            &-description {
                width: 100%;
                text-align: center;
                margin: 0 0 40px 0;
            }
        }
    }
}
</style>
