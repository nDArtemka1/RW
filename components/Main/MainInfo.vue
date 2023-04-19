<template>
    <div class="main-info">
        <div class="main-info-p container">
            Мебельная мастерская <strong>ROYAL WOOD</strong> работает на рынке
            столярных изделий 20 лет. Наша компания имеет собственное
            производство, включающее конструкторский отдел, покрасочные камеры,
            современный столярный цех. Мы используем только высококачественные и
            экологически безопасные материалы. Наша продукция соответствует
            самым высоким стандартам качества.
        </div>
    </div>
</template>

<style lang="scss">
.main-info {
    background-color: var(--lightGray);
    font-size: 25px;
    &-p {
        padding: 70px;
        strong {
            font-size: 27px;
            color: var(--brown);
        }
    }
}

@media (max-width: 426px) {
    .main-info {
        background-color: var(--lightGray);
        font-size: 20px;
        &-p {
            padding: 40px 20px;
            text-align: center;
            strong {
                font-size: 20px;
                color: var(--brown);
            }
        }
    }
}
</style>
