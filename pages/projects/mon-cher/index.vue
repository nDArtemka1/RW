<template>
    <section class="catalog">
        <div class="container">
            <h1 class="catalog-title"><span>Клубный дом Mon Cher</span></h1>
        </div>

        <div class="catalog-descriptions container">
            <p class="catalog-description">
                Все индивидуальные столярные изделия для апрартаментов в клубном
                доме Mon Cher мы изготовили по чертежам Архитектурного бюро
                «Бахарев и партнеры». Интерьер получился очень женственный,
                легкий, нарядный, с французским настроением: авторские
                межкомнатные двери, мебель для ванных комнат, глянцевые стеновые
                панели из шпона эвкалипта, небольшая библиотека для светлого
                кабинета с открытыми нишами и полками, спрятанными за
                зеркальными дверцами, ажурный стеллаж в уютном уголке гостиной,
                гнутые перила для лестницы, лаконичная мебель для постирочной и
                экстравагантная гардеробная в прихожей зоне.
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
    title: "Royal-Wood | Реализация мебели в Клубном доме Mon Cher | Изготовление кухонной мебели по размерам под заказ",
});

const catalogItems = [
    {
        img: "project-1.jpg",
        catalogLink: "project-1",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-1.jpg",
        },
    },
    {
        img: "project-3.jpg",
        catalogLink: "project-3",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-3.jpg",
        },
    },
    {
        img: "project-15.jpg",
        catalogLink: "project-15",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-15.jpg",
        },
    },

    {
        img: "project-4.jpg",
        catalogLink: "project-4",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-4.jpg",
        },
    },
    {
        img: "project-5.jpg",
        catalogLink: "project-5",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-5.jpg",
        },
    },

    {
        img: "project-7.jpg",
        catalogLink: "project-7",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-7.jpg",
        },
    },
    {
        img: "project-8.jpg",
        catalogLink: "project-8",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-8.jpg",
        },
    },
    {
        img: "project-9.jpg",
        catalogLink: "project-9",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-9.jpg",
        },
    },
    {
        img: "project-2.jpg",
        catalogLink: "project-2",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-2.jpg",
        },
    },
    {
        img: "project-11.jpg",
        catalogLink: "project-11",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-11.jpg",
        },
    },
    {
        img: "project-12.jpg",
        catalogLink: "project-12",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-12.jpg",
        },
    },
    {
        img: "project-13.jpg",
        catalogLink: "project-13",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-13.jpg",
        },
    },
    {
        img: "project-14.jpg",
        catalogLink: "project-14",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-14.jpg",
        },
    },
    {
        img: "project-10.jpg",
        catalogLink: "project-0",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-10.jpg",
        },
    },
    {
        img: "project-16.jpg",
        catalogLink: "project-16",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-16.jpg",
        },
    },
    {
        img: "project-17.jpg",
        catalogLink: "project-17",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-17.jpg",
        },
    },
    {
        img: "project-18.jpg",
        catalogLink: "project-18",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-18.jpg",
        },
    },
    {
        img: "project-19.jpg",
        catalogLink: "project-19",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-19.jpg",
        },
    },
    {
        img: "project-20.jpg",
        catalogLink: "project-20",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-20.jpg",
        },
    },
    {
        img: "project-21.jpg",
        catalogLink: "project-21",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-21.jpg",
        },
    },
    {
        img: "project-22.jpg",
        catalogLink: "project-22",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-22.jpg",
        },
    },
    {
        img: "project-23.jpg",
        catalogLink: "project-23",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-23.jpg",
        },
    },
    {
        img: "project-24.jpg",
        catalogLink: "project-24",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-24.jpg",
        },
    },
    {
        img: "project-25.jpg",
        catalogLink: "project-25",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-25.jpg",
        },
    },
    {
        img: "project-26.jpg",
        catalogLink: "project-26",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-26.jpg",
        },
    },
    {
        img: "project-27.jpg",
        catalogLink: "project-27",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-27.jpg",
        },
    },
    {
        img: "project-28.jpg",
        catalogLink: "project-28",
        catalogPathImg: "/projects/mon-cher/",
        catalogPathCategory: "/projects/mon-cher/",
        catalogImgs: {
            img1: "project-28.jpg",
        },
    },
];

const projects = [
    {
        img: "emerald.jpg",
        title: "ЖК Эмеральд",
        description: "Реализация мебели в ЖК Эмеральд",
        href: "/projects/emerald",
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
