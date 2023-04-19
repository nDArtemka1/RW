<template>
    <NuxtLink
        to="https://api.whatsapp.com/send?phone=79637821473"
        target="_blank"
    >
        <div class="animate-pulse2">
            <div class="vidualsatun">
                <div class="campakesad">
                    <div class="vebusines"></div>
                    <div class="nigkugas">
                        <i
                            ><nuxt-img
                                src="iconwhatsapp.png"
                                alt="iconwhatsapp"
                        /></i>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<style lang="scss">
.animate-pulse2 {
    position: fixed;
    top: 90%;
    left: 90%;
    z-index: 5;
}
.vidualsatun {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: animate_pulse2 2s infinite;
    border-radius: 100px;
}

.campakesad,
.vebusines,
.nigkugas {
    position: absolute;
    width: 70px;
    height: 70px;
    color: #fff;
    text-align: center;
    border-radius: 50%;
}
.vebusines {
    cursor: pointer;
    z-index: 1;
    overflow: hidden;
}
.campakesad {
    background: #00bd15;
    position: relative;
    transition: 0.5s;
}
.nigkugas {
    font-size: 28px;
    padding: 10px;
    animation: phone 0.9s ease-in-out infinite;
}
.dsacin {
    position: absolute;
    opacity: 0;
    text-transform: uppercase;
    font-weight: 500;
    top: 18px;
    font-size: 12px;
    transform: scaleX(-1);
    transition: 0.5s ease-in-out;
}
.nigkugas i {
    transition: 0.5s ease-in-out;
}
.campakesad:hover {
    background: #00bd15;
}
.campakesad:hover i {
    transition: 0.5s ease-in-out;
    transform: scale(0);
}
.campakesad:hover .dsacin {
    transform: scaleX(1);
    transition: 0.5s ease-in-out;
    opacity: 1;
}
.campakesad:hover::before,
.campakesad:hover::after {
    content: "";
    position: absolute;
    border: 1px solid green;
    left: -20px;
    right: -20px;
    top: -20px;
    bottom: -20px;
    border-radius: 50%;
    animation: pulse 1.8s linear infinite;
    opacity: 0;
}
.campakesad:hover::after {
    animation-delay: 0.5s;
}

@keyframes phone {
    0%,
    100% {
        transform: rotate(-20deg);
    }
    50% {
        transform: rotate(21deg);
    }
}
@keyframes pulse {
    0% {
        transform: scale(0.5);
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: scale(1.2);
        opacity: 0;
    }
}

@keyframes animate_pulse2 {
    0% {
        box-shadow: 0 0 0 0 rgba(0, 189, 31, 0.67);
    }
    70% {
        box-shadow: 0 0 0 20px rgba(0, 189, 31, 0.27);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(0, 189, 31, 0.17);
    }
}

@media (max-width: 769px) {
    .animate-pulse2 {
        position: fixed;
        top: 93%;
        left: 10%;
        z-index: 5;
    }
}
</style>
