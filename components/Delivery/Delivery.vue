<template>
    <div class="delivery">
        <h2 class="main-title"><span>Доставка и Оплата</span></h2>

        <div class="delivery-description">
            <p class="delivery-title">
                Мы предлагаем только самые выгодные условия. Позвоните нам и
                получите консультацию по оптимальному способу доставки и оплаты.
            </p>
            <ul>
                <li>1 - Доставка по Москве - 3 000 руб</li>
                <li>
                    2 - Доставка по Московской области - от 4 000 до 10 000 руб
                    (зависит от расстояния от МКАД)
                </li>
                <li>
                    3 - Доставка по регионам РФ - стоимость оговаривается
                    индивидуально
                </li>
                <li>
                    4 - Отправка по России транспортными компаниями -
                    оплачиваются только услуги транспортной компании
                </li>
            </ul>
            <p class="delivery-title">
                Мы принимаем оплату следующими способами:
            </p>
            <ul>
                <li>1 - Безналичный расчет</li>
                <li>2 - Наличные в нашем офисе</li>
            </ul>
        </div>
        <h2 class="main-title">
            <span>Как осуществить заказ в нашей мастерской:</span>
        </h2>
        <Stages />
    </div>
</template>

<script setup>
import Stages from "~/components/Main/Stages.vue";
</script>

<style lang="scss">
.delivery {
    &-img {
        margin: 40px 0;
        padding: 0 200px;
    }
    &-description {
        font-size: 20px;
        ul {
            margin-top: 20px;
            li {
                margin: 15px 0;
                padding-left: 50px;
            }
        }
    }
    &-title {
        position: relative;
        margin: 40px 0;
        span {
            color: var(--brown);
        }
    }
}

@media (max-width: 426px) {
    .delivery {
        padding-top: 40px;
    }
}
</style>
