<template>
    <div class="catalog-info">
        <h1 class="main-title">
            <span>Деревянная мебель каталог от Royal Wood</span>
        </h1>

        <p class="main-title-description">
            Мы изготавливаем деревянную мебель в Москве с 2003 года.
        </p>

        <p class="catalog-info-description">
            Цена авторской мебели по индивидуальным заказам складывается из
            таких составляющих:
        </p>

        <ul class="catalog-info-ul" type="disc">
            <li class="catalog-info-li">
                Стоимость выбранного материала и комплектующих;
            </li>
            <li class="catalog-info-li">Размеры изделий, их перечень;</li>
            <li class="catalog-info-li">Сложность проекта;</li>
            <li class="catalog-info-li">Наличие элементов декора.</li>
        </ul>
        <p class="catalog-info-p">
            При составлении сметы учитывается проведение покраски, доставки,
            монтажа и доводки мебели. Отдельно просчитывается стоимость ручек,
            изготовление столешниц и наличие встраиваемой бытовой техники.
        </p>
        <p class="catalog-info-p">
            Выезд мастера для проведения замеров осуществляется бесплатно.
        </p>
    </div>
</template>

<script setup></script>

<style lang="scss">
.catalog-info {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    &-description {
        font-weight: 500;
    }
    li::before {
        content: "\27A4";
        color: var(--brown);
        font-size: 25px;

        width: 2em;
    }
    &-li {
        display: flex;
        align-items: center;
        margin-left: 40px;
    }
    p {
        margin: 20px 0;
    }
}

.main-title-description {
    font-weight: 500;
    margin-bottom: 0;
}

@media (max-width: 426px) {
    .catalog-info {
        &-li {
            margin-left: 0;
        }
    }
}
</style>
