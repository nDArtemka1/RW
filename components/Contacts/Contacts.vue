<template>
    <div class="contacts">
        <h1 class="main-title"><span>Контакты</span></h1>
        <div class="contact-adress-info">
            <p class="contact-adress-info-p">
                Мы всегда рады гостям! Чтобы приехать к нам на производство,
                проконсультироваться более подробно, ознакомиться с нашими
                материалами и образцами, Вы можете оставить
                <a href="#form"> <strong>ЗАЯВКУ</strong></a>
                на сайте для согласования удобного времени.
            </p>
        </div>
    </div>
</template>

<style lang="scss">
.contacts {
    font-size: 20px;
    &-info {
        display: flex;
        justify-content: space-between;
    }
    &-img {
        margin: 40px 0;
    }
    &-description {
        margin-bottom: 40px;
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
    &-title:before,
    &-title:after {
        height: 6px;
        background: var(--brown);
        width: 114px;
        height: 6px;
        content: "";
        position: absolute;
        bottom: -10px;
        border-radius: 50px;
    }
    &-title:before {
        left: 0;
        width: 114px;
    }
    &-title:after {
        left: 120px;
        width: 14px;
    }
}

@media (max-width: 426px) {
    .contacts {
        padding-top: 40px;
    }
}
</style>
