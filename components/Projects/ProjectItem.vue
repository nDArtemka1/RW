<template>
    <div
        v-for="project in projectsItems"
        :key="project.title"
        class="project-item"
    >
        <NuxtLink :to="project.href">
            <nuxt-img
                :src="`projects/${project.img}`"
                :alt="project.title"
                class="project-item-img"
            />
            <div class="overlay">
                <div class="overlay-btn">
                    <div class="overlay-btn-a underline">Подробнее</div>
                </div>
            </div></NuxtLink
        >

        <h4 class="project-item-title">
            <strong>{{ project.title }}</strong>
        </h4>
        <span class="project-item-description">{{ project.description }}</span>
    </div>
</template>

<script>
export default {
    props: {
        projectsItems: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    components: {},
    data() {
        return {};
    },
};
</script>

<style lang="scss"></style>
