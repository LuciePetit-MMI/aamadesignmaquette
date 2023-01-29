<template>
    <div>
        <main class="mt-24 flex flex-col px-5 laptop:px-20">
            <div class="text-center">
                <h1 class="h1">Vos inspirations</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum odit dignissimos modi libero ut quibusdam!</p>    
            </div>
            <div class="inspi_card">
                <div class="relative w-fit">
                    <ProductCard :inspiration="true"></ProductCard>
                </div>
                <div class="relative w-fit">
                    <ProductCard :inspiration="true"></ProductCard>
                </div>
                <div class="relative w-fit">
                    <ProductCard :inspiration="true"></ProductCard>
                </div>
                <div class="relative w-fit">
                    <ProductCard :inspiration="true"></ProductCard>
                </div>
                <div class="relative w-fit">
                    <ProductCard :inspiration="true"></ProductCard>
                </div>
                <div class="relative w-fit">
                    <ProductCard :inspiration="true"></ProductCard>
                </div>
                <div class="relative w-fit">
                    <ProductCard :inspiration="true"></ProductCard>
                </div>
            </div>
            <Button class="self-center">Voir plus</Button>    
        </main>

    </div>
</template>

<script>
import Button from '@/components/Buttons.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
    components: { Button, ProductCard, },
};
</script>