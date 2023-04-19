<template>
    <div class="contact-info">
        <div
            v-for="adress in adresses"
            :key="adress.title"
            class="contact-info-adresses"
        >
            <div class="contact-info-adress">
                <strong class="contact-info-adress-title">{{
                    adress.title
                }}</strong>
                <div class="contact-info-adress-flex">
                    <nuxt-img
                        id="myImg"
                        :src="`${adress.img}`"
                        :alt="adress.img"
                    />
                    <a :href="adress.a">{{ adress.description }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const adresses = [
    {
        title: "Адрес шоу-рума",
        description:
            "117218, г. Москва, пр-т Нахимовский, д. 24, м. Профсоюзная.",
        img: "location.png",
        a: "#",
    },
    {
        title: "Телефон",
        description: "+7 (495) 995-34-73",
        img: "phone.png",
        a: "tel:+7 (495) 995-34-73",
    },
    {
        title: "E-mail",
        description: "info@royalwood.ru",
        img: "mail.png",
        a: "mailto:info@royalwood.ru",
    },
];
</script>

<style lang="scss">
.contact-info {
    font-size: 20px;
    &-adress {
        display: flex;
        flex-direction: column;

        &-title {
            margin: 20px 0;
            color: var(--brown);
        }
        img {
            width: 35px;
            height: 35px;
            margin-right: 20px;
        }
        &-flex {
            display: flex;
            align-items: center;
        }
    }
}
</style>
