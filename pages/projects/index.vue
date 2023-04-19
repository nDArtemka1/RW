<template>
    <section class="container">
        <h1 class="catalog-title">
            <span>Наши реализованные проекты</span>
        </h1>

        <div class="project-items">
            <Projects :projectsItems="projects" />
        </div>
    </section>
</template>

<script setup>
useHead({
    title: "Royal-Wood | Наши реализованные проекты | Изготовление мебели по размерам из массива дерева под заказ",
});
</script>

<script>
import Projects from "~~/components/Projects/Projects.vue";

export default {
    components: {
        Projects,
    },
    data() {
        return {
            projects: [
                {
                    img: "emerald.jpg",
                    title: "ЖК Эмеральд",
                    description: "Реализация мебели в ЖК Эмеральд",
                    href: "/projects/emerald",
                },
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
            ],
        };
    },
    methods: {},
};
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
