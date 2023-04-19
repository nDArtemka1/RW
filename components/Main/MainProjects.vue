<template>
    <div class="main-project">
        <h4 class="main-title"><span>Наши реализованные проекты</span></h4>

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
</template>

<script>
import Projects from "~~/components/Projects/Projects.vue";

export default {
    components: { Projects },
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
};
</script>

<style lang="scss">
.main-project {
    &-title {
        font-size: 35px;
        text-align: center;
        margin-top: 40px;
        margin-bottom: -35px;
        text-decoration: underline;
    }
    &-center {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
.project {
    &-items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
    }
}
.project-item {
    border-bottom: 2px solid var(--lightOrange);
    margin: 10px;
    padding-bottom: 15px;
    position: relative;

    &-title {
        margin: 15px 0;
    }

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
    .overlay:hover {
        cursor: pointer;
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
    img {
        height: 400px;
    }
}
.project-item:hover .overlay {
    opacity: 1;
}

@media only screen and (min-width: 769px) and (max-width: 1200px) {
    .project-item {
        img {
            height: 350px;
        }
        .overlay {
            width: 100%;
            height: 350px;
        }
    }
}

@media only screen and (min-width: 426px) and (max-width: 769px) {
    .project {
        &-items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
        }
    }
    .project-item {
        img {
            height: 350px;
        }
        .overlay {
            width: 100%;
            height: 350px;
        }
    }
}

@media (max-width: 426px) {
    .project {
        &-items {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 25px;
        }
    }
    .project-item {
        img {
            height: 350px;
        }
        .overlay {
            width: 100%;
            height: 350px;
        }
    }
}
</style>
