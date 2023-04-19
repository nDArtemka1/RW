<template>
    <section class="catalog">
        <div class="container">
            <h1 class="catalog-title"><span>ЖК Эмеральд </span></h1>
        </div>

        <div class="catalog-descriptions container">
            <p class="catalog-description">
                Яркий проект в жк эмеральд - пример нашего плодотворного
                сотрудничества с дизайнером Оксаной Короткиной, который был
                недавно опубликован в журнале
                <NuxtLink
                    to="https://mydecor.ru/interior/flats/sovremennaya-kvartira-s-klassicheskimi-elementami-v-moskve/"
                    target="_blank"
                    >MyDecor. *</NuxtLink
                >
            </p>
            <p class="catalog-description">
                Квартира площадью 192 кВ м, в которой дизайнеру удалось найти
                баланс между классикой и современностью , сохранив красоту и
                функциональность. Все пространства выдержаны в спокойных
                природных тонах и гармонично сочетаются друг с другом.
            </p>
        </div>

        <div class="main-project-items">
            <ProjectSwiperItems :catalog-items="catalogItems" />
        </div>

        <div class="container">
            <h3 class="catalog-title"><span>Другие проекты</span></h3>

            <div class="main-project-center">
                <div class="project-items">
                    <Projects :projectsItems="projects" />
                </div>

                <div class="production-view-all">
                    <NuxtLink to="/projects" class="production-view-all_a">
                        <span class="underline">Посмотреть все проекты</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import Projects from "~~/components/Projects/Projects.vue";

useHead({
    title: "Royal-Wood | Реализация мебели в ЖК Эмеральд | Изготовление кухонной мебели по размерам под заказ",
});

const catalogItems = [
    {
        img: "project-1.jpg",
        catalogLink: "project-1",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-1.jpg",
        },
    },
    {
        img: "project-8.jpg",
        catalogLink: "project-8",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-8.jpg",
        },
    },

    {
        img: "project-3.jpg",
        catalogLink: "project-3",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-3.jpg",
        },
    },
    {
        img: "project-4.jpg",
        catalogLink: "project-4",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-4.jpg",
        },
    },
    {
        img: "project-5.jpg",
        catalogLink: "project-5",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-5.jpg",
        },
    },
    {
        img: "project-6.jpg",
        catalogLink: "project-6",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-6.jpg",
        },
    },
    {
        img: "project-7.jpg",
        catalogLink: "project-7",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-7.jpg",
        },
    },
    {
        img: "project-2.jpg",
        catalogLink: "project-2",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-2.jpg",
        },
    },
    {
        img: "project-9.jpg",
        catalogLink: "project-9",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-9.jpg",
        },
    },
    {
        img: "project-10.jpg",
        catalogLink: "project-10",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-10.jpg",
        },
    },
    {
        img: "project-11.jpg",
        catalogLink: "project-11",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-11.jpg",
        },
    },
    {
        img: "project-12.jpg",
        catalogLink: "project-12",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-12.jpg",
        },
    },
    {
        img: "project-13.jpg",
        catalogLink: "project-13",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-13.jpg",
        },
    },
    {
        img: "project-14.jpg",
        catalogLink: "project-14",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-14.jpg",
        },
    },
    {
        img: "project-15.jpg",
        catalogLink: "project-15",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-15.jpg",
        },
    },
    {
        img: "project-16.jpg",
        catalogLink: "project-16",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-16.jpg",
        },
    },
    {
        img: "project-17.jpg",
        catalogLink: "project-17",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-17.jpg",
        },
    },
    {
        img: "project-18.jpg",
        catalogLink: "project-18",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-18.jpg",
        },
    },
    {
        img: "project-19.jpg",
        catalogLink: "project-19",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-19.jpg",
        },
    },
    {
        img: "project-20.jpg",
        catalogLink: "project-20",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-20.jpg",
        },
    },
    {
        img: "project-21.jpg",
        catalogLink: "project-21",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-21.jpg",
        },
    },
    {
        img: "project-22.jpg",
        catalogLink: "project-22",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-22.jpg",
        },
    },
    {
        img: "project-23.jpg",
        catalogLink: "project-23",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-23.jpg",
        },
    },
    {
        img: "project-24.jpg",
        catalogLink: "project-24",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-24.jpg",
        },
    },
    {
        img: "project-25.jpg",
        catalogLink: "project-25",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-25.jpg",
        },
    },
    {
        img: "project-26.jpg",
        catalogLink: "project-26",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-26.jpg",
        },
    },
    {
        img: "project-27.jpg",
        catalogLink: "project-27",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-27.jpg",
        },
    },
    {
        img: "project-28.jpg",
        catalogLink: "project-28",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-28.jpg",
        },
    },
    {
        img: "project-29.jpg",
        catalogLink: "project-29",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-29.jpg",
        },
    },
    {
        img: "project-30.jpg",
        catalogLink: "project-30",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-30.jpg",
        },
    },
    {
        img: "project-32.jpg",
        catalogLink: "project-32",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-32.jpg",
        },
    },
    {
        img: "project-33.jpg",
        catalogLink: "project-33",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-33.jpg",
        },
    },
    {
        img: "project-34.jpg",
        catalogLink: "project-34",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-34.jpg",
        },
    },
    {
        img: "project-35.jpg",
        catalogLink: "project-35",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-35.jpg",
        },
    },
    {
        img: "project-36.jpg",
        catalogLink: "project-36",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-36.jpg",
        },
    },
    {
        img: "project-37.jpg",
        catalogLink: "project-37",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-37.jpg",
        },
    },
    {
        img: "project-38.jpg",
        catalogLink: "project-38",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-38.jpg",
        },
    },
    {
        img: "project-39.jpg",
        catalogLink: "project-39",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-39.jpg",
        },
    },
    {
        img: "project-40.jpg",
        catalogLink: "project-40",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-40.jpg",
        },
    },
    {
        img: "project-41.jpg",
        catalogLink: "project-41",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-41.jpg",
        },
    },
    {
        img: "project-42.jpg",
        catalogLink: "project-42",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-42.jpg",
        },
    },
    {
        img: "project-43.jpg",
        catalogLink: "project-43",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-43.jpg",
        },
    },
    {
        img: "project-44.jpg",
        catalogLink: "project-44",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-44.jpg",
        },
    },
    {
        img: "project-45.jpg",
        catalogLink: "project-45",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-45.jpg",
        },
    },
    {
        img: "project-46.jpg",
        catalogLink: "project-46",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-46.jpg",
        },
    },
    {
        img: "project-47.jpg",
        catalogLink: "project-47",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-47.jpg",
        },
    },
    {
        img: "project-48.jpg",
        catalogLink: "project-48",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-48.jpg",
        },
    },
    {
        img: "project-49.jpg",
        catalogLink: "project-49",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-49.jpg",
        },
    },
    {
        img: "project-50.jpg",
        catalogLink: "project-50",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-50.jpg",
        },
    },
    {
        img: "project-51.jpg",
        catalogLink: "project-51",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-51.jpg",
        },
    },
    {
        img: "project-52.jpg",
        catalogLink: "project-52",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-52.jpg",
        },
    },
    {
        img: "project-53.jpg",
        catalogLink: "project-53",
        catalogPathImg: "/projects/emerald/",
        catalogPathCategory: "/projects/emerald/",
        catalogImgs: {
            img1: "project-53.jpg",
        },
    },
];

const projects = [
    {
        img: "mon-cher.jpg",
        title: "Клубный дом Mon Cher",
        description: "Реализация мебели Клубный дом Mon Cher",
        href: "/projects/mon-cher",
    },
    {
        img: "in-the-clearing.jpg",
        title: "Квартира на Полянке",
        description: "Реализация мебели Квартира на Полянке",
        href: "/projects/in-the-clearing",
    },
];
</script>

<style lang="scss">
.catalog-description {
    font-size: 19px;
    margin-bottom: 20px;
    a {
        font-size: 20px;
        text-decoration: underline;
    }
    a:hover {
        text-decoration: none;
    }
}
</style>
