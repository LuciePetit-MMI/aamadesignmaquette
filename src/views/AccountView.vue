<template>
    <div>
        <main class="mt-24 px-5 laptop:px-20">
            <div>
                <h1 class="h1">Mon compte</h1>
                <div class="flex flex-wrap w-full justify-between laptop:w-1/3 laptop:mx-auto">
                    <a @click="step='informations'" class="relative cursor-pointer">
                        <span class="block h-1 absolute -inset-x-2 -bottom-2 top-8 bg-marine" aria-hidden="true"></span>
                        <span class="relative">Infos</span>
                    </a>
                    <a @click="step='commandes'" class="relative cursor-pointer">
                        <span class="block h-1 absolute -inset-x-2 -bottom-2 top-8 bg-marine" aria-hidden="true"></span>
                        <span class="relative">Commande</span>
                    </a>
                    <a @click="step='inspirations'" class="relative cursor-pointer">
                        <span class="block h-1 absolute -inset-x-2 -bottom-2 top-8 bg-marine" aria-hidden="true"></span>
                        <span class="relative">Mes lampes</span>
                    </a>
                </div>
            </div>
            <div class="laptop:account my-10">
                <div class="hidden laptop:block">
                    <p class="h1 text-blue mx-16 text-5xl">Si vous pouvez le rêver, vous pouvez le faire.</p>
                </div>
                <div class="laptop:ml-10 laptop:mr-16">
                    <section v-if="step==='informations'" id="infos">
                        <form action="" class="flex flex-col">
                            <label for="">Nom Prénom</label>
                            <input type="text" placeholder="Lorem Ipsum">
                            <div class="flex flex-col laptop:flex-row">
                                <div class="flex flex-col w-1/2">
                                    <label for="">Email</label>
                                    <input type="text" placeholder="Lorem Ipsum">
                                        </div>
                                <div class="flex flex-col w-1/2">
                                    <label for="">Mot de passe</label>
                                    <input type="password" placeholder="**********">
                                </div>
                            </div>
                            <label for="">Rue</label>
                            <input type="text" placeholder="Lorem Ipsum">
                            <label for="">Complément d'adresse</label>
                            <input type="text" placeholder="Lorem Ipsum">
                            <div class="flex flex-col laptop:flex-row">
                                <div class="flex flex-col w-1/2">
                                    <label for="">Code postal</label>
                                    <input type="text" placeholder="Lorem Ipsum">    
                                </div>
                                <div class="flex flex-col w-1/2">
                                    <label for="">Ville</label>
                                    <input type="text" placeholder="Lorem Ipsum">
                                </div>
                            </div>
                            <label for="">Pays</label>
                            <input type="text" placeholder="Lorem Ipsum">
                            <Button type="submit" :secondary="true" class="self-end">Modifier</Button>
                        </form>
                    </section>
                    <section v-if="step==='commandes'" id="commandes">
                            <div>                            
                                <div class="flex justify-between border-b-black border-b-2 my-2">
                                    <p>Date</p>
                                    <p>XX / XX / XXXX</p>
                                </div>
                                <div>
                                    <div class="flex justify-between">
                                        <p>N° commande</p>
                                        <p>XXXXX</p>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>Produits</p>
                                        <ul>
                                            <li class="my-1">XXXX</li>
                                            <li class="my-1">XXXX</li>
                                            <li class="my-1">XXXX</li>
                                            <li class="my-1">XXXX</li>
                                        </ul>
                                    </div>
                                    <div class="flex justify-between">
                                        <p>Statut</p>
                                        <p>Livré</p>
                                    </div>
                                </div>
                            </div>
                    </section>
                    <section v-if="step==='inspirations'" id="lampes">
                        <swiper class="swiper_product px-5 flex flex-col justify-center items-center laptop:hidden"
                            :slides-per-view="auto"
                            :space-between="30"
                            :loop="true"
                            :centeredSlides="true"
                            :pagination="{
                                clickable: true,
                            }"
                            :modules="modules"
                        >
                            <swiper-slide class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </swiper-slide>
                            <swiper-slide class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </swiper-slide>
                            <swiper-slide class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </swiper-slide>
                        </swiper>

                        <div class="hidden laptop:grid grid-cols-3 gap-4 px-5 laptop:p-0">
                            <div class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </div>
                            <div class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </div>
                            <div class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </div>
                            <div class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </div>
                            <div class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </div>
                            <div class="relative w-fit">
                                <ProductCard :inspiration="true"/>
                            </div>
                        </div>
                    </section>    
                </div>
        
            </div>
        </main>
    </div>
</template>

<script>
import Button from '@/components/Buttons.vue';
import ProductCard from '@/components/ProductCard.vue';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";


export default {
    components: { Swiper, SwiperSlide, Button, ProductCard, },
    data(){
            return{
                step: 'inspirations',
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
            modules: [Pagination],
        };
    },
};
</script>