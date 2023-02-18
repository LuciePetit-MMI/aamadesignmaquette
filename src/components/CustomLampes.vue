<template>
    <div class="flex flex-row w-full">
        <div class="mr-20">
            <h1 class="h1 relative laptop:text-5xl">Personnalisez <br/>votre Ciluzio</h1>
            <p class="text-marine font-bold relative">
                <span v-if="step==='1'">Choisissez votre taille</span>
                <span v-if="step==='2'">Choisissez vos couleur</span>
                <span v-if="step==='3'">Finalisez votre lampe</span>
            </p>
        </div>
        <div v-if="step==='1'" class="size grow">
            <swiper class="swiper px-5 w-full flex flex-col justify-center items-center laptop:hidden"
                :slides-per-view="1"
                :space-between="30"
                :loop="false"
                :centered-slides="true"
            >
                <swiper-slide class="relative overflow-hidden w-fit">
                    <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
                        <div class="flex flex-col items-end">
                            <p class="text-white font-bold text-xl">Piccolo</p>
                            <p class="text-white font-bold text-xl">490 €</p>
                            <Button  :secondary="true" :color="'white'" :svg="true">Configurer</Button>
                        </div>
                    </div>
                    <div class="-z-10">
                        <img src="../assets/images/product_card_small.svg" alt="">
                        <img src="../assets/images/nude-piccolo.webp" alt="" class="absolute -top-48 left-0 rotate-45">
                    </div>
                </swiper-slide>
                <swiper-slide class="relative overflow-hidden w-fit">
                    <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
                        <div class="flex flex-col items-end">
                            <p class="text-white font-bold text-xl">Medio</p>
                            <p class="text-white font-bold text-xl">490 €</p>
                            <Button  :secondary="true" :color="'white'" :svg="true">Configurer</Button>
                        </div>
                    </div>
                    <div class="-z-10">
                        <img src="../assets/images/product_card_small.svg" alt="">
                        <img src="../assets/images/nude-piccolo.webp" alt="" class="absolute -top-48 left-0 rotate-45">
                    </div>
                </swiper-slide>
                <swiper-slide class="relative overflow-hidden w-fit">
                    <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
                        <div class="flex flex-col items-end">
                            <p class="text-white font-bold text-xl">Grande</p>
                            <p class="text-white font-bold text-xl">490 €</p>
                            <Button  :secondary="true" :color="'white'" :svg="true">Configurer</Button>
                        </div>
                    </div>
                    <div class="-z-10">
                        <img src="../assets/images/product_card_small.svg" alt="">
                        <img src="../assets/images/nude-piccolo.webp" alt="" class="absolute -top-48 left-0 rotate-45">
                    </div>
                </swiper-slide>
            </swiper>
            <div class="hidden laptop:grid laptop:grid-cols-3 laptop:gap-10 laptop:mx-20">
                <div class="relative overflow-hidden w-fit">
                    <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
                        <div class="flex flex-col items-end">
                            <p class="text-white font-bold text-xl">Piccolo</p>
                            <p class="text-white font-bold text-xl">490 €</p>
                            <Button  :secondary="true" :color="'white'" :svg="true">Configurer</Button>
                        </div>
                    </div>
                    <div class="-z-10">
                        <img src="../assets/images/product_card_small.svg" alt="">
                        <img src="../assets/images/nude-piccolo.webp" alt="" class="absolute -top-48 left-0 rotate-45">
                    </div>
                </div>
                <div class="relative overflow-hidden w-fit">
                    <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
                        <div class="flex flex-col items-end">
                            <p class="text-white font-bold text-xl">Medio</p>
                            <p class="text-white font-bold text-xl">750 €</p>
                            <Button  :secondary="true" :color="'white'" :svg="true">Configurer</Button>
                        </div>
                    </div>
                    <div class="-z-10">
                        <img src="../assets/images/product_card_small.svg" alt="">
                        <img src="../assets/images/nude-piccolo.webp" alt="" class="absolute -top-48 left-0 rotate-45">
                    </div>
                </div>
                <div class="relative overflow-hidden w-fit">
                    <div class="absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between">
                        <div class="flex flex-col items-end">
                            <p class="text-white font-bold text-xl">Grande</p>
                            <p class="text-white font-bold text-xl">890 €</p>
                            <Button  :secondary="true" :color="'white'" :svg="true">Configurer</Button>
                        </div>
                    </div>
                    <div class="-z-10">
                        <img src="../assets/images/product_card_small.svg" alt="">
                        <img src="../assets/images/nude-piccolo.webp" alt="" class="absolute -top-48 left-0 rotate-45">
                    </div>
                </div>
            </div>
        </div>
        <div v-if="step==='2'" class="colors grow">
            <div class="relative laptop:h-[70vh] w-full">
                <div v-for="(content, index) in sortedConfigurator" :key="index">
                    <swiper v-if="content.choices[1]" class="swiper absolute bottom-0 w-full"
                        :slides-per-view="1"
                        :space-between="0"
                        :loop="true"
                    >
                        <swiper-slide v-for="(choice, index) in content.choices" :key="index" class="w-fit">
                                <img :src="choice.images[0].image.url" alt="">
                                <p class="hidden">{{ choice.name }}</p>
                        </swiper-slide>
                    </swiper>
                    <img @click="log(content.layerId)" :src="content.choices[0].images[0].image.url" alt="" class="absolute bottom-0 cursor-pointer">
                    
                </div>
            </div>
        </div>
        <div v-if="step==='3'" class="">

        </div>
        <div class="buttons self-end relative">
            <p v-for="data in product" :key="data.id" class="text-xl text-marine font-bold">{{ data.price }} €</p>
            <Button @click="step = '3'" v-if="step==='2'" :svg="true">Finaliser</Button>
            <Button @click="step = '1'" v-if="step==='2'" :secondary="true">Précédent</Button>
            <Button @click="addToCart" v-if="step==='3'" :svg="true">Acheter</Button>
            <Button @click="step = '2'" v-if="step==='3'" :secondary="true">Précédent</Button>
        </div>
    </div>
</template>

<script>
import { client } from "@/utils/axios";

import Button from '@/components/Buttons.vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

export default{
    components: { Swiper, SwiperSlide, Button, },
    data(){
        return{
            step: '2',
            active: false,
            product: {},
            configurator: [],
            customProduct: {},
        }
    },
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
        };
    },
    async mounted() {
        await this.getProductData();
    },
    async beforeRouteUpdate(to, from) {
        await this.getProductData(to.params.product);
    },
    computed: {
        sortedConfigurator(){
            return this.configurator.sort((a, b) => { 
                return b.layerId - a.layerId 
            })
        }
    },
    methods:{
        async getProductData () {
            const response = await client.get('wc/v3/products?slug=piccolo')
            this.product = response.data;
            const productContent = this.product[0]
            this.configurator = productContent.meta_data[10].value
        },
        addToCart(){
            this.$store.commit('add', { product:this.product, quantity:1 })
        },
    },
}
</script>

<style scoped>
.colors img{
    max-width: 50%!important;
}
</style>