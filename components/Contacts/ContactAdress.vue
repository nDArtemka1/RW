<template>
    <div class="contact-adress">
        <div class="contact-adress-right">
            <h2 class="contact-title">Адрес:</h2>
            <div class="contacts-info">
                <div class="contact-info-cart">
                    <div class="contact-info-cart-adress">
                        142100, Московская область, г. Подольск, ул.
                        Комсомольская, д. 1
                    </div>
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3A9db1e2dc6273ec949fa7ac07309879c199d7846488473e8c1b27d198a25b276c"
                        frameborder="0"
                        allowfullscreen="true"
                        width="630px"
                        height="400px"
                        style="display: block"
                    ></iframe>
                </div>
            </div>
        </div>

        <div class="contact-adress-left">
            <h2 class="contact-title">Реквизиты</h2>

            <ul class="contact-adress-left-ul">
                <li>
                    <strong>ООО «Роял Вуд»</strong>
                </li>
                <li><strong>ОГРН:</strong> 1145074007528</li>
                <li><strong>ИНН/КПП:</strong> 5036141396/503601001</li>
            </ul>
        </div>

        <h2 class="main-title"><span>Схема проезда к нам:</span></h2>
    </div>
</template>

<style lang="scss">
.contact-adress {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &-left {
        width: 440px;
        &-ul {
            margin-top: 80px;
            li {
                margin: 20px 0;
            }
        }
    }
    &-info-p {
        font-size: 20px;
        strong {
            font-size: 20px;
            cursor: pointer;
            text-decoration: underline;
        }
    }
}
.contact-info-cart {
    iframe {
        width: 100%;
    }
}
.contact-info-cart-adress {
    margin-bottom: 20px;
}
.contact-title {
    margin: 20px 0;
}
</style>
