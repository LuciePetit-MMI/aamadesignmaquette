<template>
    <div>
        <div class="swiper h-[60vh] relative laptop:w-11/12">
            <swiper class="px-5 flex flex-col justify-center items-center"
                :slides-per-view="3"
                :space-between="30"
                :loop="true"
                :centered-slides="true"
                :navigation="true"
                :modules="modules"
            >
                <swiper-slide class="text-center h-full w-screen flex flex-col justify-between laptop:h-[60vh] laptop:w-1/3">
                        <p>Nom de la lampe</p>
                        <div class="flex flex-row w-full">
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude-piccolo.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p  >490 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/victor-medio.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p  >750 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude_grande.png" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p  >890 €</p>
                            </div>
                        </div>
                        <Button      :svg="true" class="self-center">Acheter</Button>
                </swiper-slide>
                <swiper-slide class="text-center h-full w-screen flex flex-col justify-between laptop:h-[60vh] laptop:w-1/3">
                        <p>Nom de la lampe</p>
                        <div class="flex flex-row w-full">
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude-piccolo.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>490 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/victor-medio.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>750 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude_grande.png" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>890 €</p>
                            </div>
                        </div>
                        <Button :svg="true" class="self-center">Acheter</Button>
                </swiper-slide>
                <swiper-slide class="text-center h-full w-screen flex flex-col justify-between laptop:h-[60vh] laptop:w-1/3">
                        <p>Nom de la lampe</p>
                        <div class="flex flex-row w-full">
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude-piccolo.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>490 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/victor-medio.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>750 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude_grande.png" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>890 €</p>
                            </div>
                        </div>
                        <Button :svg="true" class="self-center">Acheter</Button>
                </swiper-slide>
                <swiper-slide class="text-center h-full w-screen flex flex-col justify-between laptop:h-[60vh] laptop:w-1/3">
                        <p>Nom de la lampe</p>
                        <div class="flex flex-row w-full">
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude-piccolo.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>490 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/victor-medio.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>750 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude_grande.png" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>890 €</p>
                            </div>
                        </div>
                        <Button :svg="true" class="self-center">Acheter</Button>
                </swiper-slide>
                <swiper-slide class="text-center h-full w-screen flex flex-col justify-between laptop:h-[60vh] laptop:w-1/3">
                        <p>Nom de la lampe</p>
                        <div class="flex flex-row w-full">
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude-piccolo.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p  >490 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/victor-medio.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p  >750 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude_grande.png" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p  >890 €</p>
                            </div>
                        </div>
                        <Button      :svg="true" class="self-center">Acheter</Button>
                </swiper-slide>
                <swiper-slide class="text-center h-full w-screen flex flex-col justify-between laptop:h-[60vh] laptop:w-1/3">
                        <p>Nom de la lampe</p>
                        <div class="flex flex-row w-full">
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude-piccolo.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>490 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/victor-medio.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>750 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude_grande.png" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>890 €</p>
                            </div>
                        </div>
                        <Button :svg="true" class="self-center">Acheter</Button>
                </swiper-slide>
                <swiper-slide class="text-center h-full w-screen flex flex-col justify-between laptop:h-[60vh] laptop:w-1/3">
                        <p>Nom de la lampe</p>
                        <div class="flex flex-row w-full">
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude-piccolo.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>490 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/victor-medio.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>750 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude_grande.png" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>890 €</p>
                            </div>
                        </div>
                        <Button :svg="true" class="self-center">Acheter</Button>
                </swiper-slide>
                <swiper-slide class="text-center h-full w-screen flex flex-col justify-between laptop:h-[60vh] laptop:w-1/3">
                        <p>Nom de la lampe</p>
                        <div class="flex flex-row w-full">
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude-piccolo.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>490 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/victor-medio.webp" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>750 €</p>
                            </div>
                            <div class="h-full w-1/3 text-center">
                                <img src="../assets/images/nude_grande.png" alt="" class="laptop:h-[40vh] laptop:mx-auto">
                                <p>890 €</p>
                            </div>
                        </div>
                        <Button :svg="true" class="self-center">Acheter</Button>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Buttons.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';;

export default{
    components: { Swiper, SwiperSlide, Button, },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation],
        };
    },
}
</script>

<style scoped>
div.swiper-wrapper > div > div > div > p, 
div.swiper-wrapper > div.swiper-slide > div.self-center{
    visibility: hidden!important;
}

div.swiper-wrapper > div.swiper-slide.text-center.h-full.w-screen.flex.flex-col.justify-between.laptop\:h-\[60vh\].laptop\:w-1\/3.swiper-slide-active > div.flex.flex-row.w-full > div > p, 
#app > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > div > div > div.swiper-wrapper > div.swiper-slide.text-center.h-full.w-screen.flex.flex-col.justify-between.laptop\:h-\[60vh\].laptop\:w-1\/3.swiper-slide-active > div.self-center{
    visibility: visible!important;
}
</style>