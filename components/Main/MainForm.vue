<template>
    <div class="main-form">
        <div id="form" class="main-form-title">
            <h2 class="main-title">
                <span>Готовы заказать? Нужна консультация специалиста?</span>
            </h2>
        </div>
        <div class="main-form-flex">
            <div class="main-form-info">
                <div class="main-form-info-adresses">
                    <nuxt-img
                        src="location-icon.svg"
                        alt="location-icon"
                        class="navbar-icon-svg"
                    />
                    <span
                        >142100, Московская область, г. Подольск, ул.
                        Комсомольская, д. 1</span
                    >
                </div>
                <div class="main-form-info-adresses">
                    <a
                        class="main-form-info-adresses-svg"
                        href="tel:+7 (495) 995-34-73"
                        ><nuxt-img
                            src="phone-icon.svg"
                            alt="phone-icon"
                            class="navbar-icon-svg"
                        />
                        <div class="underline">+7 (495) 995-34-73</div>
                    </a>
                </div>
                <div class="main-form-info-adresses">
                    <a
                        class="main-form-info-adresses-svg"
                        href="mailto:info@royalwood.ru"
                        ><nuxt-img
                            src="mail-icon.svg"
                            alt="mail-icon"
                            class="navbar-icon-svg"
                        />
                        <div class="underline">info@royalwood.ru</div>
                    </a>
                </div>
            </div>
            <div class="main-form-inputs">
                <p class="main-form-inputs-title">
                    Заполните форму, и наши специалисты свяжутся с Вами для
                    уточнения всех деталей
                </p>

                <Form />
            </div>
        </div>
    </div>
</template>

<script setup>
import Form from "~~/components/All/Form.vue";
</script>

<style lang="scss">
.main-form {
    &-flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &-info {
        padding: 15px;
        &-adresses {
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            &-svg {
                display: flex;
                align-items: center;
            }
            svg {
                margin-right: 15px;
            }
        }
    }
    &-inputs {
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
        &-title {
            margin-bottom: 20px;
        }
    }
}
.form {
    display: flex;
    flex-direction: column;
    width: 100%;
}
.input-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    input {
        outline: none !important;
        font-size: 17px;
        border: none;
        border-bottom: 2px solid var(--lightOrange);
        padding: 15px;
    }
    label {
        margin-top: 10px;
        color: #afafb6;
        padding-left: 5px;
    }
}
.button {
    input {
        width: 100%;
        padding: 15px;
        font-size: 17px;
        border: 2px solid var(--lightOrange);
        transition: all 0.4s;
        background-color: var(--white);
        margin-top: 20px;
        color: var(--black);
    }

    input:hover {
        cursor: pointer;
        border: 2px solid var(--brown);
        background-color: var(--lightOrange);
    }
}

@media only screen and (min-width: 200px) and (max-width: 426px) {
    .main-form {
        &-flex {
            display: flex;
            flex-direction: column;
        }
    }
}
</style>
