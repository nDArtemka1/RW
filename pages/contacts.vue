<template>
    <div class="container">
        <Contacts />

        <ContactAdress />
        <div class="contact-steps">
            <ContactSteps
                v-for="item in steps"
                :key="item.title"
                :step-data="item"
            />
        </div>
    </div>
</template>

<script setup>
import Contacts from "~~/components/Contacts/Contacts.vue";
import ContactAdress from "~~/components/Contacts/ContactAdress.vue";
import ContactSteps from "~~/components/Contacts/ContactSteps.vue";

useHead({
    title: "Royal-Wood | Контакты компании Royal-Wood | Изготовление мебели по размерам из массива дерева под заказ",
});
</script>

<script>
export default {
    data() {
        return {
            steps: [
                {
                    title: "Заезд с Комсомольской улицы ",
                    img: "step1-1.jpg",
                },
                {
                    title: "Заезд с Большой Серпуховской улицы ",
                    img: "step2-1.jpg",
                },
                // {
                //     title: "Шаг 1 - Expostroy, павион 3. ",
                //     img: "step1.jpg",
                // },
                // {
                //     title: "Шаг 2 - Пройдите прямо по Галлерее. ",
                //     img: "step2.jpg",
                // },
                // {
                //     title: "Шаг 3 - Второй поворот направо. ",
                //     img: "step3.jpg",
                // },
                // {
                //     title: "Шаг 4 - Экспозиция Мебельной Мастерской Royal Wood.",
                //     img: "step4.jpg",
                // },
            ],
        };
    },
};
</script>

<style lang="scss"></style>
