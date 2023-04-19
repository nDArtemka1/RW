<template>
    <div class="stage-sale">
        <div class="stage-sale-items">
            <div
                v-for="stage in stages"
                :key="stage.title"
                class="stage-sale-item"
            >
                <div class="stage-sale-flex">
                    <nuxt-img
                        :src="`main/${stage.img}`"
                        :alt="stage.title"
                        class="stage-sale-item-img"
                    />
                    <div class="stage-sale-item-title">
                        <h4>{{ stage.title }}</h4>
                    </div>
                </div>
                <div class="stage-sale-item-description">
                    {{ stage.description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            stages: [
                {
                    img: "appeal-icon.png",
                    title: "1 - ОБРАЩЕНИЕ",
                    description:
                        "Вы можете оформить заказ на изготовление авторской мебели из массива дерева по телефону, электронной почте или при помощи онлайн-формы обратной связи на сайте.",
                },
                {
                    img: "project-icon.png",
                    title: "2 - ПРОЕКТ",
                    description:
                        "Для начала изготовления мебели из натурального дерева необходимо наличие проекта. Если вы можете предоставить готовый макет, то сразу же составляется коммерческое предложение и подписывается договор.",
                },
                {
                    img: "measurements-icon.png",
                    title: "3 - ЗАМЕРЫ",
                    description:
                        "Для разработки проекта авторской мебели необходимо сделать замеры на объекте и подробно изучить пожелания клиента. Стоимость конструкторских работ входит в общую сумму заказа.",
                },
                {
                    img: "contract-icon.png",
                    title: "4 - ДОГОВОР",
                    description:
                        "После подписания договора клиент вносит предоплату в размере 40%. По факту готовности авторской мебели менеджер созванивается с клиентом. На этом этапе также оплачивается 40 процентов от оставшейся суммы.",
                },
                {
                    img: "montage-icon.png",
                    title: "5 - МОНТАЖ",
                    description:
                        "Затем изделия доставляются нами на объект, монтируются, доводятся и сдаются клиенту. Окончательный расчет производится при подписании акта приема-передачи.",
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.stage-sale {
    &-items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-bottom: 20px;
    }

    &-item {
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px solid var(--lightOrange);
        border-radius: 10px;
        margin-bottom: 20px;
        &-title {
            margin-bottom: 10px;
        }
        &-img {
            margin-right: 20px;
        }
        img {
            width: 60px;
            height: 60px;
        }
    }

    &-item:nth-child(4) {
        grid-column: 1 / span 2;
    }
    &-flex {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
}

@media only screen and (min-width: 426px) and (max-width: 769px) {
    .stage-sale {
        &-items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
        }
        &-item {
            margin-bottom: 0;
        }
        &-item:nth-child(4) {
            grid-column: 2 / span 1;
        }
        &-item:nth-child(5) {
            grid-column: 1 / span 2;
        }
    }
}

@media only screen and (min-width: 200px) and (max-width: 426px) {
    .stage-sale {
        &-items {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
        }
        &-item {
            margin-bottom: 0;
        }
        &-item:nth-child(4) {
            grid-column: 1 / span 1;
        }
        &-item:nth-child(5) {
            grid-column: 1 / span 1;
        }
    }
}
</style>
