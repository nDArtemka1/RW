<template>
    <form
        class="form"
        action="http://royalw31.beget.tech/sender.php"
        method="post"
    >
        <div class="input-box">
            <input
                type="text"
                class="name"
                name="name"
                placeholder="Имя"
                required
            />
        </div>
        <div class="input-box">
            <input
                type="text"
                class="phone"
                name="phone"
                placeholder="+7 (999) 999 99 99"
                required
            />
        </div>
        <div class="input-box">
            <input type="email" name="email" placeholder="Email" />
        </div>

        <div class="input-box-chekbox">
            <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                checked
                required
            />
            <label for="checkbox"
                >Согласие на обработку
                <NuxtLink to="/privacity" target="_blank"
                    ><span> персональных данных </span></NuxtLink
                >
            </label>
        </div>
        <div class="button">
            <button type="button" class="send-form">Отправить заявку</button>
        </div>

        <div class="status"></div>
    </form>
</template>

<script></script>

<style lang="scss">
.input-box-chekbox {
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
    input {
        margin-right: 20px;
    }
    span {
        text-decoration: underline;
        color: var(--black);
        transition: all 0.4s;
    }
    span:hover {
        text-decoration: none;
    }
}

form {
    button {
        width: 100%;
        padding: 15px;
        font-size: 17px;
        border: 2px solid var(--lightOrange);
        transition: all 0.4s;
        background-color: var(--white);
        margin-top: 20px;
        color: var(--black);
        cursor: pointer;
    }
    button:hover {
        border: 2px solid var(--brown);
        background-color: var(--lightOrange);
    }
    input.error {
        border-bottom-color: var(--red);
        margin-bottom: 20px;
    }
}

.status {
    &-p {
        margin-top: 20px;
    }
}
</style>
