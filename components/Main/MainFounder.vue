<template>
    <div class="founder">
        <div class="founder-title">
            <h2 class="main-title"><span>Основатель компании</span></h2>
        </div>

        <div class="founder-item">
            <p class="founder-item-description">
                У истоков создания столярной мастерской <br />
                <strong>Royal Wood</strong> стоит наш бессменный генеральный
                директор Матюхин Дмитрий Александрович, в 2003 году окончивший
                Московский Государственный Университет леса, с юных лет
                вникающий в процессы деревообработки. Его страсть к любимому
                делу объединила нашу команду колоссальных профессионалов,
                буквально чувствующих дерево всей душой, под одной общей идеей -
                создавать ту идеальную среду для жизни, в которой тепло и
                комфортно не только Вам, но и Вашему сердцу.
            </p>
            <div class="founder-item-img">
                <img src="/images/main/founder.jpg" alt="founder" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.founder-item {
    display: flex;
    justify-content: space-between;
    &-description {
        width: 60%;
        padding: 40px 40px 40px 0;
        font-size: 20px;
        color: var(--gray);
        strong {
            font-size: 22px;
            color: var(--brown);
        }
    }
    &-img {
        padding: 40px;
    }
}

@media (max-width: 769px) {
    .founder {
        &-item {
            flex-wrap: wrap;
            flex-direction: column-reverse;
            &-description {
                width: 100%;
                padding: 20px 20px 40px 20px;
                text-align: center;
            }
            &-img {
                display: flex;
                padding: 20px;
                justify-content: center;
                img {
                    height: 500px;
                }
            }
        }
    }
}

@media (max-width: 426px) {
    .founder {
        &-item {
            &-description {
                text-align: start;
            }
            &-img {
                padding: 0;

                img {
                    height: 300px;
                }
            }
        }
    }
}
</style>
